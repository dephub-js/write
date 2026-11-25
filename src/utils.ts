import type { PathLike } from 'node:fs';

import { access, constants } from 'node:fs/promises';

export async function canAccess(path: PathLike) {
  try {
    await access(path, constants.R_OK | constants.W_OK);
    return true;
  } catch {
    return false;
  }
}
