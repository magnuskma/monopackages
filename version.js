import { spawnSync } from 'node:child_process';

const version = process.argv[2];
spawnSync('pnpm', ['version', version, '--git-tag-version=false'], {
  cwd: process.cwd(),
});
console.log(process.cwd());
