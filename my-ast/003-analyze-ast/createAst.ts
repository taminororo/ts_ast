import { readFile } from 'fs/promises';

import ts from 'typescript';

export type AstNode = {
    kind: string; // ノードの種別を表すプロパティ
    text: string; // ノードのテキストを表すプロパティ
    children: AstNode[]; // 子ノードを格納するプロパティ
};

function toAstNode(node: ts.Node) {
    const result: AstNode = {
        kind: ts.SyntaxKind[node.kind],
        text: node.getText(),
        children: [],
    };
    ts.forEachChild(node, (child => {
        result.children.push(toAstNode(child));
    }));
    return result;
}

export async function createAst(fileName: string) {
    const sourceCode = await readFile(fileName, 'utf8');
    const sourceFile = ts.createSourceFile(
        fileName,
        sourceCode,
        ts.ScriptTarget.Latest,
        true
    );

    return toAstNode(sourceFile);
}