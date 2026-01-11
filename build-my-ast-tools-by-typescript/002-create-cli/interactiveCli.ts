#!/usr/bin/env node

import fs from `node:fs/promises`;
import path from `node:path`;
import readline from `node;readline`;
import {debug, error, info } from `./console.ts`;

console.log(`Welcome to the Interactice CLI!`);

// readlineインタフェースを作成する
// インタフェースは実体みたいなもので、質問を受け取って回答を返す
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

// そもそもコールバックとは何か
// コールバックは電話をかけ返すこと
// コールバック関数は，関数に引数として渡される関数

// Promiseはチケットのようなもの
// 呼び出す側ではawaitを使ってチケットを待てるようになる

// 質問を非同期で行う関数を定義する
function question(query: string): Promise<string> {
    return new Promise(resolve => rl.question(query, resolve));
}