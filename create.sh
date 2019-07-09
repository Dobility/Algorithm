#!/usr/bin/env bash

# 创建文件夹 + README.md + index.js
# 使用前可以对本文件绝对路径进行 alias，然后在指定的文件夹下运行
# 例如 alias create="../../../create.sh"
# 使用方法： create [文件夹] [--node（可选，表示生成node模板）]
dir=${1}
mkdir ${dir}
cd ${dir}
echo -e "# 题目\n\n\n# 示例\n\n\n# 思路\n" > README.md
touch index.js

if [[ $2 == "--node" ]]; then
  echo -e "const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let count = 0;
let n = 0;
let arr = [];

rl.on('line', line => {
    count++;
    if (count === 1) {
        n = parseInt(line);
    } else {
        arr = line.split(' ').map(item => parseInt(item));
    }
});" > index.js
fi
