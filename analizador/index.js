import fs from 'fs';
import antlr4 from 'antlr4';

import MiniCLexer from './generated/MiniCLexer.js';
import MiniCParser from './generated/MiniCParser.js';
import { CustomMiniCVisitor } from './CustomMiniCVisitor.js';

let input;
try {
  input = fs.readFileSync('input.txt', 'utf8');
} catch (err) {
  console.error("No se pudo leer input.txt");
  process.exit(1);
}

const chars = new antlr4.InputStream(input);
const lexer = new MiniCLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);

// Tabla de tokens
tokens.fill();

const allTokens = tokens.tokens
  .filter(t => t.type >= 0)
  .map(t => ({
    tipo: lexer.constructor.symbolicNames?.[t.type] || `TOKEN_${t.type}`,
    texto: t.text,
    linea: t.line,
    columna: t.column
  }));


console.log("\nTabla de tokens:");
console.table(allTokens);

//  Análisis sintáctico
const parser = new MiniCParser(tokens);
const tree = parser.programa();

if (parser._syntaxErrors > 0) {
  console.error("Errores de sintaxis.");
} else {
  console.log("\nEntrada válida.");
  console.log("\nÁrbol: ", tree.toStringTree(parser.ruleNames));

  const visitor = new CustomMiniCVisitor();
  const translatedCode = visitor.visit(tree);

  console.log("\nTraducción a JavaScript:\n" + translatedCode);

  //  Ejecutar código traducido
  try {
  const script = `
    ${translatedCode}
    globalThis.__resultado__ = suma(5, 7);
  `;
  eval(script);
  console.log("\nResultado de la ejecución:");
  console.log("suma(5, 7):", globalThis.__resultado__);
} catch (err) {
  console.error("\nError al ejecutar el código traducido:", err);
}
}