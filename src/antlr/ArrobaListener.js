// Generated from ./Arroba.g4 by ANTLR 4.5.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by ArrobaParser.
function ArrobaListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

ArrobaListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
ArrobaListener.prototype.constructor = ArrobaListener;

// Enter a parse tree produced by ArrobaParser#compilationUnit.
ArrobaListener.prototype.enterCompilationUnit = function(ctx) {
};

// Exit a parse tree produced by ArrobaParser#compilationUnit.
ArrobaListener.prototype.exitCompilationUnit = function(ctx) {
};


// Enter a parse tree produced by ArrobaParser#stmt.
ArrobaListener.prototype.enterStmt = function(ctx) {
};

// Exit a parse tree produced by ArrobaParser#stmt.
ArrobaListener.prototype.exitStmt = function(ctx) {
};


// Enter a parse tree produced by ArrobaParser#assignStmt.
ArrobaListener.prototype.enterAssignStmt = function(ctx) {
};

// Exit a parse tree produced by ArrobaParser#assignStmt.
ArrobaListener.prototype.exitAssignStmt = function(ctx) {
};


// Enter a parse tree produced by ArrobaParser#exprStmt.
ArrobaListener.prototype.enterExprStmt = function(ctx) {
};

// Exit a parse tree produced by ArrobaParser#exprStmt.
ArrobaListener.prototype.exitExprStmt = function(ctx) {
};


// Enter a parse tree produced by ArrobaParser#breakStmt.
ArrobaListener.prototype.enterBreakStmt = function(ctx) {
};

// Exit a parse tree produced by ArrobaParser#breakStmt.
ArrobaListener.prototype.exitBreakStmt = function(ctx) {
};


// Enter a parse tree produced by ArrobaParser#retStmt.
ArrobaListener.prototype.enterRetStmt = function(ctx) {
};

// Exit a parse tree produced by ArrobaParser#retStmt.
ArrobaListener.prototype.exitRetStmt = function(ctx) {
};


// Enter a parse tree produced by ArrobaParser#throwStmt.
ArrobaListener.prototype.enterThrowStmt = function(ctx) {
};

// Exit a parse tree produced by ArrobaParser#throwStmt.
ArrobaListener.prototype.exitThrowStmt = function(ctx) {
};


// Enter a parse tree produced by ArrobaParser#tryStmt.
ArrobaListener.prototype.enterTryStmt = function(ctx) {
};

// Exit a parse tree produced by ArrobaParser#tryStmt.
ArrobaListener.prototype.exitTryStmt = function(ctx) {
};


// Enter a parse tree produced by ArrobaParser#whileStmt.
ArrobaListener.prototype.enterWhileStmt = function(ctx) {
};

// Exit a parse tree produced by ArrobaParser#whileStmt.
ArrobaListener.prototype.exitWhileStmt = function(ctx) {
};


// Enter a parse tree produced by ArrobaParser#ifStmt.
ArrobaListener.prototype.enterIfStmt = function(ctx) {
};

// Exit a parse tree produced by ArrobaParser#ifStmt.
ArrobaListener.prototype.exitIfStmt = function(ctx) {
};


// Enter a parse tree produced by ArrobaParser#ifBlock.
ArrobaListener.prototype.enterIfBlock = function(ctx) {
};

// Exit a parse tree produced by ArrobaParser#ifBlock.
ArrobaListener.prototype.exitIfBlock = function(ctx) {
};


// Enter a parse tree produced by ArrobaParser#elifBlock.
ArrobaListener.prototype.enterElifBlock = function(ctx) {
};

// Exit a parse tree produced by ArrobaParser#elifBlock.
ArrobaListener.prototype.exitElifBlock = function(ctx) {
};


// Enter a parse tree produced by ArrobaParser#elseBlock.
ArrobaListener.prototype.enterElseBlock = function(ctx) {
};

// Exit a parse tree produced by ArrobaParser#elseBlock.
ArrobaListener.prototype.exitElseBlock = function(ctx) {
};


// Enter a parse tree produced by ArrobaParser#StringExpr.
ArrobaListener.prototype.enterStringExpr = function(ctx) {
};

// Exit a parse tree produced by ArrobaParser#StringExpr.
ArrobaListener.prototype.exitStringExpr = function(ctx) {
};


// Enter a parse tree produced by ArrobaParser#BoolExpr.
ArrobaListener.prototype.enterBoolExpr = function(ctx) {
};

// Exit a parse tree produced by ArrobaParser#BoolExpr.
ArrobaListener.prototype.exitBoolExpr = function(ctx) {
};


// Enter a parse tree produced by ArrobaParser#FunctionExpr.
ArrobaListener.prototype.enterFunctionExpr = function(ctx) {
};

// Exit a parse tree produced by ArrobaParser#FunctionExpr.
ArrobaListener.prototype.exitFunctionExpr = function(ctx) {
};


// Enter a parse tree produced by ArrobaParser#IdExpr.
ArrobaListener.prototype.enterIdExpr = function(ctx) {
};

// Exit a parse tree produced by ArrobaParser#IdExpr.
ArrobaListener.prototype.exitIdExpr = function(ctx) {
};


// Enter a parse tree produced by ArrobaParser#RegexLiteralExpr.
ArrobaListener.prototype.enterRegexLiteralExpr = function(ctx) {
};

// Exit a parse tree produced by ArrobaParser#RegexLiteralExpr.
ArrobaListener.prototype.exitRegexLiteralExpr = function(ctx) {
};


// Enter a parse tree produced by ArrobaParser#InlineFunctionExpr.
ArrobaListener.prototype.enterInlineFunctionExpr = function(ctx) {
};

// Exit a parse tree produced by ArrobaParser#InlineFunctionExpr.
ArrobaListener.prototype.exitInlineFunctionExpr = function(ctx) {
};


// Enter a parse tree produced by ArrobaParser#IndexExpr.
ArrobaListener.prototype.enterIndexExpr = function(ctx) {
};

// Exit a parse tree produced by ArrobaParser#IndexExpr.
ArrobaListener.prototype.exitIndexExpr = function(ctx) {
};


// Enter a parse tree produced by ArrobaParser#RawStringExpr.
ArrobaListener.prototype.enterRawStringExpr = function(ctx) {
};

// Exit a parse tree produced by ArrobaParser#RawStringExpr.
ArrobaListener.prototype.exitRawStringExpr = function(ctx) {
};


// Enter a parse tree produced by ArrobaParser#AwaitExpr.
ArrobaListener.prototype.enterAwaitExpr = function(ctx) {
};

// Exit a parse tree produced by ArrobaParser#AwaitExpr.
ArrobaListener.prototype.exitAwaitExpr = function(ctx) {
};


// Enter a parse tree produced by ArrobaParser#ArrayExpr.
ArrobaListener.prototype.enterArrayExpr = function(ctx) {
};

// Exit a parse tree produced by ArrobaParser#ArrayExpr.
ArrobaListener.prototype.exitArrayExpr = function(ctx) {
};


// Enter a parse tree produced by ArrobaParser#NumExpr.
ArrobaListener.prototype.enterNumExpr = function(ctx) {
};

// Exit a parse tree produced by ArrobaParser#NumExpr.
ArrobaListener.prototype.exitNumExpr = function(ctx) {
};


// Enter a parse tree produced by ArrobaParser#LocalExpr.
ArrobaListener.prototype.enterLocalExpr = function(ctx) {
};

// Exit a parse tree produced by ArrobaParser#LocalExpr.
ArrobaListener.prototype.exitLocalExpr = function(ctx) {
};


// Enter a parse tree produced by ArrobaParser#MemberExpr.
ArrobaListener.prototype.enterMemberExpr = function(ctx) {
};

// Exit a parse tree produced by ArrobaParser#MemberExpr.
ArrobaListener.prototype.exitMemberExpr = function(ctx) {
};


// Enter a parse tree produced by ArrobaParser#ConstBoolExpr.
ArrobaListener.prototype.enterConstBoolExpr = function(ctx) {
};

// Exit a parse tree produced by ArrobaParser#ConstBoolExpr.
ArrobaListener.prototype.exitConstBoolExpr = function(ctx) {
};


// Enter a parse tree produced by ArrobaParser#NestedExpr.
ArrobaListener.prototype.enterNestedExpr = function(ctx) {
};

// Exit a parse tree produced by ArrobaParser#NestedExpr.
ArrobaListener.prototype.exitNestedExpr = function(ctx) {
};


// Enter a parse tree produced by ArrobaParser#MathExpr.
ArrobaListener.prototype.enterMathExpr = function(ctx) {
};

// Exit a parse tree produced by ArrobaParser#MathExpr.
ArrobaListener.prototype.exitMathExpr = function(ctx) {
};


// Enter a parse tree produced by ArrobaParser#ArrowRightExpr.
ArrobaListener.prototype.enterArrowRightExpr = function(ctx) {
};

// Exit a parse tree produced by ArrobaParser#ArrowRightExpr.
ArrobaListener.prototype.exitArrowRightExpr = function(ctx) {
};


// Enter a parse tree produced by ArrobaParser#InvocationExpr.
ArrobaListener.prototype.enterInvocationExpr = function(ctx) {
};

// Exit a parse tree produced by ArrobaParser#InvocationExpr.
ArrobaListener.prototype.exitInvocationExpr = function(ctx) {
};


// Enter a parse tree produced by ArrobaParser#NegationExpr.
ArrobaListener.prototype.enterNegationExpr = function(ctx) {
};

// Exit a parse tree produced by ArrobaParser#NegationExpr.
ArrobaListener.prototype.exitNegationExpr = function(ctx) {
};


// Enter a parse tree produced by ArrobaParser#paramSpec.
ArrobaListener.prototype.enterParamSpec = function(ctx) {
};

// Exit a parse tree produced by ArrobaParser#paramSpec.
ArrobaListener.prototype.exitParamSpec = function(ctx) {
};


// Enter a parse tree produced by ArrobaParser#booleanOperator.
ArrobaListener.prototype.enterBooleanOperator = function(ctx) {
};

// Exit a parse tree produced by ArrobaParser#booleanOperator.
ArrobaListener.prototype.exitBooleanOperator = function(ctx) {
};



exports.ArrobaListener = ArrobaListener;