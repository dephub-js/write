#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Command, CommandError } from '@dephub/command';
import { logger } from '@dephub/logger';

import { writeFile } from './core/write.js';
import { description, name, version } from './utils/pkg.js';

const cmd = new Command()
  .name(name.split('/')[1] ?? 'write')
  .version(version)
  .description(description)
  .argument('filePath', 'Path where the file will be written')
  .argument('content', 'Content to write (if not provided, reads from stdin)')
  .handler(async ({ args: { content, filePath } }) => {
    try {
      let finalContent = content;

      // If no content provided, read from stdin
      if (!content) {
        finalContent = await readStdin();

        if (!finalContent) {
          logger.error('No content provided and stdin is empty');
          process.exit(1);
        }
      }

      await writeFile(filePath, finalContent);
      logger.success(`Written to ${filePath}`);
    } catch (err: any) {
      logger.error(`Failed to write to ${filePath}: ${err.message}`);
      process.exit(1);
    }
  });

/**
 * Reads content from stdin
 */
const readStdin = (): Promise<string> =>
  new Promise((resolve, reject) => {
    let data = '';

    process.stdin.setEncoding('utf8');
    process.stdin.on('data', (chunk) => (data += chunk));
    process.stdin.on('end', () => resolve(data.trim()));
    process.stdin.on('error', reject);

    // If stdin is not being piped, resolve empty string after timeout
    if (process.stdin.isTTY) {
      setTimeout(() => resolve(''), 100);
    }
  });

try {
  await cmd.run();
} catch (err) {
  if (err instanceof CommandError) {
    logger.error(`\nError: ${err.message}\n`);
    cmd.help();
    process.exit(1);
  }
  throw err;
}
