#!/usr/bin/env node

import fs from 'node:fs/promises';
import path from 'node:path';
import readline from 'node:readline';
import {debug, error, info } from './console.ts';

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

// 以下を追加
try {
    // それぞれのユーザから入力を受け付ける
    const inputFilePath = await question(`Enter the input file path: `);

    if (!inputFilePath) {
        error(`Input file path is required`);
        rl.close();
        process.exit(1);
    }

    const outputFilePath = await question(
        `Enter output file path (leave blank to print to console): `
    );

    const debugMode = await question(`Enable debug mode? (y/N): `);
    if (debugMode.trim().toLowerCase() === 'y') {
        process.env.DEBUG = 'true';
    }


} catch (err) {
    if (err instanceof Error) {
        error(err.message);
    } else {
        error(`An unknown error occurred`);
    }
    rl.close();
    process.exit(1);
}