# Project Philosophy
Entering into this project, I know that it will be no small task. So
first, it is important to come up with a plan of attack.

## Model
When I wrote the [interpreter](https://github.com/thosakwe/arroba-lang),
I implemented an [ANTLR](http://antlr.org) visitor that transformed
source elements into instances inheriting from a single parent,
`ArrobaDatum`. This way, it was easy to share common functionality
among all data.

I will likely need to do something similar; however, this time there
will be **two** intermediate representations of data:
* `ArrobaDatum`: A port of the original Java class to ES6.
* `JSDatum`: A base class for classes that can be serialized to
JavaScript expressions.

In the end, the flow will probably look like:

    Arroba code -> ANTLR4 parser -> AST -> Visitor -> ArrobaDatum ->
    Some kind of transformer -> JSDatum -> JavaScript

Constructs like `while` loops and functions will be a bit different.
The visitor will spit out the opening expressions and bracket, then
visit the child statements, and then spit out the final bracket.

## Improvements
The first step, obviously, is to just compile code that actually runs.
However, afterward I can port API's to arroba2js. For performance,
eventually arroba2js can perform static analysis and generate more
efficient JS.

\#Possibilities :)