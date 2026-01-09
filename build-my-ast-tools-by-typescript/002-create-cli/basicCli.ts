#!/usr/bin/env node
 
// Node.jsのモジュールをインポート
import fs from 'node:fs/promises';
import path from 'node:path';
// カスタムコンソールモジュールをインポート
import { debug, error, info } from './console.ts';
 
console.log('Welcome to the Basic CLI!');
 
const helpMessage =
  'Usage: basic-cli <file-path> [--out <output-path>] [--debug]';
 
// コマンドの引数を取得(0番目はnodeの実行パス、1番目はスクリプトのパスなので省く)
const args = process.argv.slice(2);
// 引数が不足している場合はヘルプメッセージを表示
if (args.length === 0) {
  info(helpMessage);
  process.exit(1);
}
