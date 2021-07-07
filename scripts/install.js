#! /usr/bin/env node
const { spawn } = require('child_process');
spawn("cd ../../ && npx husky-init && npx husky add .husky/pre-commit 'npm test'");
