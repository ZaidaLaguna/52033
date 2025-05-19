grammar MiniC;

programa: declaraciones EOF;
declaraciones: declaracion*;

declaracion: tipo identificador '(' parametros? ')' '{' cuerpo '}';
tipo: 'int' | 'float' | 'char';

parametros: parametro (',' parametro)*;
parametro: tipo identificador;

cuerpo: instruccion*;
instruccion: retorno;
retorno: 'return' expresion ';';

expresion: expresion ('+' | '-') termino | termino;
termino: termino ('*' | '/') factor | factor;
factor: '(' expresion ')' | identificador | DIGITO;

identificador: LETRA (LETRA | DIGITO)*;

LETRA: [a-zA-Z];
DIGITO: [0-9];

WS: [ \t\r\n]+ -> skip;
