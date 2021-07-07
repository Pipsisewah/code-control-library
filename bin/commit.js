#! /usr/bin/env node
let shell = require("shelljs");
shell.exec("echo 'Running Script'");
shell.exec("cd ../../ && npm run prepare");
//shell.exec("cd ../../ npm install husky");
//shell.exec("git add -A . && git commit -a -m 'gh-pages update'");
