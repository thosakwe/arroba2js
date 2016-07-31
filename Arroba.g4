grammar Arroba;

compilationUnit: stmt*;

stmt: (assignStmt | exprStmt | ifStmt | breakStmt | retStmt | throwStmt | tryStmt | whileStmt) SEMI?;
assignStmt: left=expr (ARR_L | EQUALS) right=expr;
exprStmt: expr;
breakStmt: BREAK;
retStmt: RET expr;
throwStmt: THROW expr;
tryStmt:
    ((TRY toTry+=stmt) | (TRY CURLY_L toTry+=stmt* CURLY_R))
    ((CATCH PAREN_L ID? PAREN_R toCatch+=stmt) | (CATCH PAREN_L ID? PAREN_R CURLY_L (toCatch+=stmt)* CURLY_R));
whileStmt: WHILE PAREN_L expr PAREN_R CURLY_L stmt* CURLY_R;

ifStmt:  ifBlock elifBlock* elseBlock?;
ifBlock: (IF PAREN_L expr PAREN_R stmt) | (IF PAREN_L expr PAREN_R CURLY_L stmt* CURLY_R);
elifBlock: (ELSE IF PAREN_L expr PAREN_R stmt) | (ELSE IF PAREN_L expr PAREN_R CURLY_L stmt* CURLY_R);
elseBlock: (ELSE stmt) | (ELSE CURLY_L stmt* CURLY_R);

expr:
    expr DOT ID #MemberExpr
    | ID #IdExpr
    | (INT | HEX | DBL) #NumExpr
    | (TRUE | FALSE) #ConstBoolExpr
    | EXCLAMATION expr #NegationExpr
    | AWAIT target=expr (PAREN_L ((args+=expr COMMA)* args+=expr)? PAREN_R) #AwaitExpr
    | target=expr PAREN_L ((args+=expr COMMA)* args+=expr)? PAREN_R #InvocationExpr
    | left=expr arithmeticOperator right=expr #MathExpr
    | left=expr booleanOperator right=expr #BoolExpr
    | RAW_STRING #RawStringExpr
    | STRING #StringExpr
    | target=expr SQUARE_L index=expr SQUARE_R #IndexExpr
    | SQUARE_L ((expr COMMA)* expr)? SQUARE_R #ArrayExpr
    | LOCAL COLON ID #LocalExpr
    | FN ID? paramSpec CURLY_L stmt* CURLY_R #FunctionExpr
    | (FN ID?)? paramSpec ARR_FAT expr #InlineFunctionExpr
    | left=expr ARR_R right=expr #ArrowRightExpr
    | REGEX_LITERAL #RegexLiteralExpr
    | PAREN_L expr PAREN_R #NestedExpr
;

paramSpec: ((PAREN_L ((ID COMMA)* ID)? PAREN_R) || ID);

SL_CMT: ('#' | '//') ~('\n')* -> channel(HIDDEN);
WS: (' ' | '\n' | '\r' | '\t' | '\r\n') -> skip;

ARR_FAT: '=>';
ARR_L: '<-';
ARR_R: '->';
COLON: ':';
COMMA: ',';
CURLY_L: '{';
CURLY_R: '}';
DOT: '.';
EQUALS: '=';
PAREN_L: '(';
PAREN_R: ')';
SEMI: ';';
SQUARE_L: '[';
SQUARE_R: ']';

CARET: '^';
PLUS: '+';
MINUS: '-';
MODULO: '%';
TIMES: '*';
DIVIDE: '/';
SUMMA: '$';

BITWISE_AND: '&';
BITWISE_OR: '|';
BITWISE_NOT: '!';
BITWISE_SHL: '<<';
BITWISE_SHR: '>>';
BITWISE_XOR:  'xor';

IF: 'if';
ELIF: 'elif';
ELSE: 'else';
IS: '==' | 'is' | 'equ';
NOT: '!=' | 'not' | 'nequ';
EXCLAMATION: '!';
AND: '&&' | 'and';
OR: '||' | 'or';
LT: '<' | 'lt';
LTE: LT EQUALS | 'lte';
GT: '>' | 'gt';
GTE: GT EQUALS | 'gte';
arithmeticOperator: CARET | MODULO | TIMES | DIVIDE | PLUS | MINUS;
booleanOperator: LT | LTE | GT | GTE | IS | NOT | AND | OR;

FALSE: 'false';
TRUE: 'true';

AWAIT: 'await';
BREAK: 'break';
CATCH: 'catch';
FN: 'fn' | 'function';
LOCAL: 'local';
RET: 'ret' | 'return';
THROW: 'throw';
TRY: 'try';
WHILE: 'while';

DBL: MINUS? [0-9]+ DOT [0-9]+;
HEX: '0x' [a-zA-Z0-9]+;
INT: MINUS? [0-9]+;
fragment ESCAPED: '\\"' | '\\r' | '\\n';
RAW_STRING: 'r"' (ESCAPED | ~('\n'|'\r'))*? '"';
STRING: '"' (ESCAPED | ~('\n'|'\r'))*? '"';
REGEX_LITERAL: '/' ~'/'+ '/' ('g' | 'i' | 'm' | 'u' | 'c')*;
ID: [a-zA-Z_] [a-zA-Z0-9_]*;
