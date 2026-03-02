# @dephub/write 📝

> A utility for writing files with automatic directory creation in Node.js and browsers.

[![NPM version](https://img.shields.io/npm/v/@dephub/write.svg?style=flat)](https://npmjs.org/package/@dephub/write)
[![ESM-only](https://img.shields.io/badge/ESM-only-brightgreen?style=flat)](https://nodejs.org/)

---

## Features ✨

- 📄 **Simple File Writing** - Write content to files with one function call
- 🗂️ **Automatic Directories** - Creates parent directories if they don't exist
- 🎯 **TypeScript Ready** - Full type safety with zero configuration
- 🌐 **Universal** - Works in Node.js and browser environments
- ⚡ **Lightweight** - Minimal dependencies, focused functionality

---

## Installation 📦

```bash
npm install @dephub/write
# or
pnpm add @dephub/write
# or
yarn add @dephub/write
```

---

## Usage 🎯

### Programmatic API

```typescript
import { writeFile } from '@dephub/write';

// Write simple content
await writeFile('output.txt', 'Hello World!');

// Write multi-line content
await writeFile(
  'README.md',
  `
# My Project

This is a sample README file.

## Features
- Feature 1
- Feature 2
`.trim(),
);

// Write JSON data
await writeFile(
  'config.json',
  JSON.stringify(
    {
      name: 'my-app',
      version: '1.0.0',
    },
    null,
    2,
  ),
);
```

### CLI Usage

```bash
# Quick one-time usage (no installation):
npx @dephub/write output.txt "Hello World"

# Write from stdin
echo "File content" | npx @dephub/write output.txt

# For frequent usage, install globally:
npm install -g @dephub/write
write output.txt "Hello World"

# Or use with package managers:
pnpm dlx @dephub/write output.txt "Hello World"
yarn dlx @dephub/write output.txt "Hello World"
```

---

## API Reference 📚

### `writeFile(filePath, content)`

Writes content to a file, creating directories if needed.

**Parameters:**

- `filePath` (string) - Full path to the file including filename
- `content` (string) - Content to write to the file

**Returns:** `Promise<void>`

**Example:**

```typescript
import { writeFile } from '@dephub/write';

await writeFile('dist/bundle.js', 'console.log("Hello")');
await writeFile('src/config.json', JSON.stringify(config, null, 2));
```

---

## License 📄

MIT License – see [LICENSE](LICENSE) for details.

**Author:** Estarlin R ([estarlincito.com](https://estarlincito.com))
