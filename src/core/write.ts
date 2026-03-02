/* eslint-disable security/detect-non-literal-fs-filename */
import { existsSync } from 'node:fs';
import { writeFile as fsWriteFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

/**
 * Writes content to a file, creating directories if needed
 * @param filePath - Full path to the file including filename
 * @param content - Content to write to the file
 * @example
 * ```typescript
 * await writeFile('dist/app.js', 'console.log("hello")');
 * await writeFile('src/components/Button.tsx', componentCode);
 * ```
 */
export const writeFile = async (
  filePath: string,
  content: string,
): Promise<void> => {
  const dir = path.dirname(filePath);
  if (!existsSync(dir)) {
    await mkdir(dir, { recursive: true });
  }
  await fsWriteFile(filePath, content);
};
