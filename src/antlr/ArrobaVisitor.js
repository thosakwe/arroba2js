// Generated from /Users/tobe/Source/Node.js/arroba2js/Arroba.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by ArrobaParser.

function ArrobaVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

ArrobaVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
ArrobaVisitor.prototype.constructor = ArrobaVisitor;

// Visit a parse tree produced by ArrobaParser#compilationUnit.
ArrobaVisitor.prototype.visitCompilationUnit = function(ctx) {
};


// Visit a parse tree produced by ArrobaParser#stmt.
ArrobaVisitor.prototype.visitStmt = function(ctx) {
};


// Visit a parse tree produced by ArrobaParser#assignStmt.
ArrobaVisitor.prototype.visitAssignStmt = function(ctx) {
};


// Visit a parse tree produced by ArrobaParser#exprStmt.
ArrobaVisitor.prototype.visitExprStmt = function(ctx) {
};


// Visit a parse tree produced by ArrobaParser#breakStmt.
ArrobaVisitor.prototype.visitBreakStmt = function(ctx) {
};


// Visit a parse tree produced by ArrobaParser#retStmt.
ArrobaVisitor.prototype.visitRetStmt = function(ctx) {
};


// Visit a parse tree produced by ArrobaParser#throwStmt.
ArrobaVisitor.prototype.visitThrowStmt = function(ctx) {
};


// Visit a parse tree produced by ArrobaParser#tryStmt.
ArrobaVisitor.prototype.visitTryStmt = function(ctx) {
};


// Visit a parse tree produced by ArrobaParser#whileStmt.
ArrobaVisitor.prototype.visitWhileStmt = function(ctx) {
};


// Visit a parse tree produced by ArrobaParser#ifStmt.
ArrobaVisitor.prototype.visitIfStmt = function(ctx) {
};


// Visit a parse tree produced by ArrobaParser#ifBlock.
ArrobaVisitor.prototype.visitIfBlock = function(ctx) {
};


// Visit a parse tree produced by ArrobaParser#elifBlock.
ArrobaVisitor.prototype.visitElifBlock = function(ctx) {
};


// Visit a parse tree produced by ArrobaParser#elseBlock.
ArrobaVisitor.prototype.visitElseBlock = function(ctx) {
};


// Visit a parse tree produced by ArrobaParser#StringExpr.
ArrobaVisitor.prototype.visitStringExpr = function(ctx) {
};


// Visit a parse tree produced by ArrobaParser#BoolExpr.
ArrobaVisitor.prototype.visitBoolExpr = function(ctx) {
};


// Visit a parse tree produced by ArrobaParser#FunctionExpr.
ArrobaVisitor.prototype.visitFunctionExpr = function(ctx) {
};


// Visit a parse tree produced by ArrobaParser#IdExpr.
ArrobaVisitor.prototype.visitIdExpr = function(ctx) {
};


// Visit a parse tree produced by ArrobaParser#RegexLiteralExpr.
ArrobaVisitor.prototype.visitRegexLiteralExpr = function(ctx) {
};


// Visit a parse tree produced by ArrobaParser#InlineFunctionExpr.
ArrobaVisitor.prototype.visitInlineFunctionExpr = function(ctx) {
};


// Visit a parse tree produced by ArrobaParser#IndexExpr.
ArrobaVisitor.prototype.visitIndexExpr = function(ctx) {
};


// Visit a parse tree produced by ArrobaParser#RawStringExpr.
ArrobaVisitor.prototype.visitRawStringExpr = function(ctx) {
};


// Visit a parse tree produced by ArrobaParser#AwaitExpr.
ArrobaVisitor.prototype.visitAwaitExpr = function(ctx) {
};


// Visit a parse tree produced by ArrobaParser#ArrayExpr.
ArrobaVisitor.prototype.visitArrayExpr = function(ctx) {
};


// Visit a parse tree produced by ArrobaParser#NumExpr.
ArrobaVisitor.prototype.visitNumExpr = function(ctx) {
};


// Visit a parse tree produced by ArrobaParser#LocalExpr.
ArrobaVisitor.prototype.visitLocalExpr = function(ctx) {
};


// Visit a parse tree produced by ArrobaParser#MemberExpr.
ArrobaVisitor.prototype.visitMemberExpr = function(ctx) {
};


// Visit a parse tree produced by ArrobaParser#ConstBoolExpr.
ArrobaVisitor.prototype.visitConstBoolExpr = function(ctx) {
};


// Visit a parse tree produced by ArrobaParser#NestedExpr.
ArrobaVisitor.prototype.visitNestedExpr = function(ctx) {
};


// Visit a parse tree produced by ArrobaParser#MathExpr.
ArrobaVisitor.prototype.visitMathExpr = function(ctx) {
};


// Visit a parse tree produced by ArrobaParser#ArrowRightExpr.
ArrobaVisitor.prototype.visitArrowRightExpr = function(ctx) {
};


// Visit a parse tree produced by ArrobaParser#InvocationExpr.
ArrobaVisitor.prototype.visitInvocationExpr = function(ctx) {
};


// Visit a parse tree produced by ArrobaParser#NegationExpr.
ArrobaVisitor.prototype.visitNegationExpr = function(ctx) {
};


// Visit a parse tree produced by ArrobaParser#paramSpec.
ArrobaVisitor.prototype.visitParamSpec = function(ctx) {
};


// Visit a parse tree produced by ArrobaParser#arithmeticOperator.
ArrobaVisitor.prototype.visitArithmeticOperator = function(ctx) {
};


// Visit a parse tree produced by ArrobaParser#booleanOperator.
ArrobaVisitor.prototype.visitBooleanOperator = function(ctx) {
};



exports.ArrobaVisitor = ArrobaVisitor;