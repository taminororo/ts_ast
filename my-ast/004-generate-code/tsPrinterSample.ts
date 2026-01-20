import * as ts from 'typescript';

// ts.factoryにある関数を使用してASTを作成
const f = ts.factory;

// ASTの種類に対応したcreate関数を呼び出す
const ast = f.createVariableStatement(
    undefined,
    f.createVariableDeclarationList(
        [
            f.createVariableDeclaration(
                'greeting',
                undefined,
                f.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
                f.createStringLiteral("Hello, World")
            ),
        ],
        ts.NodeFlags.Const
    )
);

// ASTをコンソールに出力するためのプリンターを作成します

const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
const source = ts.createSourceFile('sample.ts', '',
    ts.ScriptTarget.Latest);
const code = printer.printNode(ts.EmitHint.Unspecified, ast, source);

console.log(code);