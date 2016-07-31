// Generated from /Users/tobe/Source/Node.js/arroba2js/Arroba.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ArrobaListener = require('./ArrobaListener').ArrobaListener;
var ArrobaVisitor = require('./ArrobaVisitor').ArrobaVisitor;

var grammarFileName = "Arroba.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003>\u0141\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0003\u0002\u0007",
    "\u0002(\n\u0002\f\u0002\u000e\u0002+\u000b\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0005\u00036\n\u0003\u0003\u0003\u0005\u00039\n\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003",
    "\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0007\tN\n\t\f\t",
    "\u000e\tQ\u000b\t\u0003\t\u0005\tT\n\t\u0003\t\u0003\t\u0003\t\u0005",
    "\tY\n\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\t`\n\t\u0003\t",
    "\u0003\t\u0003\t\u0007\te\n\t\f\t\u000e\th\u000b\t\u0003\t\u0005\tk",
    "\n\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0007\ns\n\n\f",
    "\n\u000e\nv\u000b\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\f\u0003\f\u0007\f\u007f\n\f\f\f\u000e\f\u0082\u000b\f\u0003\f",
    "\u0005\f\u0085\n\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0007\r\u0093\n\r\f\r\u000e",
    "\r\u0096\u000b\r\u0003\r\u0003\r\u0005\r\u009a\n\r\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0007\u000e\u00aa\n\u000e\f\u000e\u000e\u000e\u00ad\u000b\u000e",
    "\u0003\u000e\u0003\u000e\u0005\u000e\u00b1\n\u000e\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0007\u000f\u00b8\n\u000f",
    "\f\u000f\u000e\u000f\u00bb\u000b\u000f\u0003\u000f\u0005\u000f\u00be",
    "\n\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0007\u0010\u00cc\n\u0010\f\u0010\u000e\u0010\u00cf\u000b",
    "\u0010\u0003\u0010\u0005\u0010\u00d2\n\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0007\u0010\u00dc\n\u0010\f\u0010\u000e\u0010\u00df\u000b\u0010\u0003",
    "\u0010\u0005\u0010\u00e2\n\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u00ea\n\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0007\u0010\u00ef\n\u0010\f\u0010\u000e",
    "\u0010\u00f2\u000b\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0005\u0010\u00f8\n\u0010\u0005\u0010\u00fa\n\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0005\u0010\u0105\n\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0007\u0010",
    "\u011a\n\u0010\f\u0010\u000e\u0010\u011d\u000b\u0010\u0003\u0010\u0005",
    "\u0010\u0120\n\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0007\u0010\u0128\n\u0010\f\u0010\u000e\u0010",
    "\u012b\u000b\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0007\u0011\u0130",
    "\n\u0011\f\u0011\u000e\u0011\u0133\u000b\u0011\u0003\u0011\u0005\u0011",
    "\u0136\n\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0005\u0011\u013b",
    "\n\u0011\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0002\u0003\u001e\u0014\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014",
    "\u0016\u0018\u001a\u001c\u001e \"$\u0002\u0007\u0004\u0002\u0006\u0006",
    "\r\r\u0003\u00028:\u0003\u0002,-\u0003\u0002\u0013\u0018\u0004\u0002",
    "#$&+\u0167\u0002)\u0003\u0002\u0002\u0002\u00045\u0003\u0002\u0002\u0002",
    "\u0006:\u0003\u0002\u0002\u0002\b>\u0003\u0002\u0002\u0002\n@\u0003",
    "\u0002\u0002\u0002\fB\u0003\u0002\u0002\u0002\u000eE\u0003\u0002\u0002",
    "\u0002\u0010S\u0003\u0002\u0002\u0002\u0012l\u0003\u0002\u0002\u0002",
    "\u0014y\u0003\u0002\u0002\u0002\u0016|\u0003\u0002\u0002\u0002\u0018",
    "\u0099\u0003\u0002\u0002\u0002\u001a\u00b0\u0003\u0002\u0002\u0002\u001c",
    "\u00bd\u0003\u0002\u0002\u0002\u001e\u0104\u0003\u0002\u0002\u0002 ",
    "\u013a\u0003\u0002\u0002\u0002\"\u013c\u0003\u0002\u0002\u0002$\u013e",
    "\u0003\u0002\u0002\u0002&(\u0005\u0004\u0003\u0002\'&\u0003\u0002\u0002",
    "\u0002(+\u0003\u0002\u0002\u0002)\'\u0003\u0002\u0002\u0002)*\u0003",
    "\u0002\u0002\u0002*\u0003\u0003\u0002\u0002\u0002+)\u0003\u0002\u0002",
    "\u0002,6\u0005\u0006\u0004\u0002-6\u0005\b\u0005\u0002.6\u0005\u0016",
    "\f\u0002/6\u0005\n\u0006\u000206\u0005\f\u0007\u000216\u0005\u000e\b",
    "\u000226\u0005\u0010\t\u000236\u0005\u0012\n\u000246\u0005\u0014\u000b",
    "\u00025,\u0003\u0002\u0002\u00025-\u0003\u0002\u0002\u00025.\u0003\u0002",
    "\u0002\u00025/\u0003\u0002\u0002\u000250\u0003\u0002\u0002\u000251\u0003",
    "\u0002\u0002\u000252\u0003\u0002\u0002\u000253\u0003\u0002\u0002\u0002",
    "54\u0003\u0002\u0002\u000268\u0003\u0002\u0002\u000279\u0007\u0010\u0002",
    "\u000287\u0003\u0002\u0002\u000289\u0003\u0002\u0002\u00029\u0005\u0003",
    "\u0002\u0002\u0002:;\u0005\u001e\u0010\u0002;<\t\u0002\u0002\u0002<",
    "=\u0005\u001e\u0010\u0002=\u0007\u0003\u0002\u0002\u0002>?\u0005\u001e",
    "\u0010\u0002?\t\u0003\u0002\u0002\u0002@A\u0007/\u0002\u0002A\u000b",
    "\u0003\u0002\u0002\u0002BC\u00074\u0002\u0002CD\u0005\u001e\u0010\u0002",
    "D\r\u0003\u0002\u0002\u0002EF\u00075\u0002\u0002FG\u0005\u001e\u0010",
    "\u0002G\u000f\u0003\u0002\u0002\u0002HI\u00076\u0002\u0002IT\u0005\u0004",
    "\u0003\u0002JK\u00076\u0002\u0002KO\u0007\n\u0002\u0002LN\u0005\u0004",
    "\u0003\u0002ML\u0003\u0002\u0002\u0002NQ\u0003\u0002\u0002\u0002OM\u0003",
    "\u0002\u0002\u0002OP\u0003\u0002\u0002\u0002PR\u0003\u0002\u0002\u0002",
    "QO\u0003\u0002\u0002\u0002RT\u0007\u000b\u0002\u0002SH\u0003\u0002\u0002",
    "\u0002SJ\u0003\u0002\u0002\u0002Tj\u0003\u0002\u0002\u0002UV\u00070",
    "\u0002\u0002VX\u0007\u000e\u0002\u0002WY\u0007>\u0002\u0002XW\u0003",
    "\u0002\u0002\u0002XY\u0003\u0002\u0002\u0002YZ\u0003\u0002\u0002\u0002",
    "Z[\u0007\u000f\u0002\u0002[k\u0005\u0004\u0003\u0002\\]\u00070\u0002",
    "\u0002]_\u0007\u000e\u0002\u0002^`\u0007>\u0002\u0002_^\u0003\u0002",
    "\u0002\u0002_`\u0003\u0002\u0002\u0002`a\u0003\u0002\u0002\u0002ab\u0007",
    "\u000f\u0002\u0002bf\u0007\n\u0002\u0002ce\u0005\u0004\u0003\u0002d",
    "c\u0003\u0002\u0002\u0002eh\u0003\u0002\u0002\u0002fd\u0003\u0002\u0002",
    "\u0002fg\u0003\u0002\u0002\u0002gi\u0003\u0002\u0002\u0002hf\u0003\u0002",
    "\u0002\u0002ik\u0007\u000b\u0002\u0002jU\u0003\u0002\u0002\u0002j\\",
    "\u0003\u0002\u0002\u0002k\u0011\u0003\u0002\u0002\u0002lm\u00077\u0002",
    "\u0002mn\u0007\u000e\u0002\u0002no\u0005\u001e\u0010\u0002op\u0007\u000f",
    "\u0002\u0002pt\u0007\n\u0002\u0002qs\u0005\u0004\u0003\u0002rq\u0003",
    "\u0002\u0002\u0002sv\u0003\u0002\u0002\u0002tr\u0003\u0002\u0002\u0002",
    "tu\u0003\u0002\u0002\u0002uw\u0003\u0002\u0002\u0002vt\u0003\u0002\u0002",
    "\u0002wx\u0007\u000b\u0002\u0002x\u0013\u0003\u0002\u0002\u0002yz\u0007",
    "1\u0002\u0002z{\u0007>\u0002\u0002{\u0015\u0003\u0002\u0002\u0002|\u0080",
    "\u0005\u0018\r\u0002}\u007f\u0005\u001a\u000e\u0002~}\u0003\u0002\u0002",
    "\u0002\u007f\u0082\u0003\u0002\u0002\u0002\u0080~\u0003\u0002\u0002",
    "\u0002\u0080\u0081\u0003\u0002\u0002\u0002\u0081\u0084\u0003\u0002\u0002",
    "\u0002\u0082\u0080\u0003\u0002\u0002\u0002\u0083\u0085\u0005\u001c\u000f",
    "\u0002\u0084\u0083\u0003\u0002\u0002\u0002\u0084\u0085\u0003\u0002\u0002",
    "\u0002\u0085\u0017\u0003\u0002\u0002\u0002\u0086\u0087\u0007 \u0002",
    "\u0002\u0087\u0088\u0007\u000e\u0002\u0002\u0088\u0089\u0005\u001e\u0010",
    "\u0002\u0089\u008a\u0007\u000f\u0002\u0002\u008a\u008b\u0005\u0004\u0003",
    "\u0002\u008b\u009a\u0003\u0002\u0002\u0002\u008c\u008d\u0007 \u0002",
    "\u0002\u008d\u008e\u0007\u000e\u0002\u0002\u008e\u008f\u0005\u001e\u0010",
    "\u0002\u008f\u0090\u0007\u000f\u0002\u0002\u0090\u0094\u0007\n\u0002",
    "\u0002\u0091\u0093\u0005\u0004\u0003\u0002\u0092\u0091\u0003\u0002\u0002",
    "\u0002\u0093\u0096\u0003\u0002\u0002\u0002\u0094\u0092\u0003\u0002\u0002",
    "\u0002\u0094\u0095\u0003\u0002\u0002\u0002\u0095\u0097\u0003\u0002\u0002",
    "\u0002\u0096\u0094\u0003\u0002\u0002\u0002\u0097\u0098\u0007\u000b\u0002",
    "\u0002\u0098\u009a\u0003\u0002\u0002\u0002\u0099\u0086\u0003\u0002\u0002",
    "\u0002\u0099\u008c\u0003\u0002\u0002\u0002\u009a\u0019\u0003\u0002\u0002",
    "\u0002\u009b\u009c\u0007\"\u0002\u0002\u009c\u009d\u0007 \u0002\u0002",
    "\u009d\u009e\u0007\u000e\u0002\u0002\u009e\u009f\u0005\u001e\u0010\u0002",
    "\u009f\u00a0\u0007\u000f\u0002\u0002\u00a0\u00a1\u0005\u0004\u0003\u0002",
    "\u00a1\u00b1\u0003\u0002\u0002\u0002\u00a2\u00a3\u0007\"\u0002\u0002",
    "\u00a3\u00a4\u0007 \u0002\u0002\u00a4\u00a5\u0007\u000e\u0002\u0002",
    "\u00a5\u00a6\u0005\u001e\u0010\u0002\u00a6\u00a7\u0007\u000f\u0002\u0002",
    "\u00a7\u00ab\u0007\n\u0002\u0002\u00a8\u00aa\u0005\u0004\u0003\u0002",
    "\u00a9\u00a8\u0003\u0002\u0002\u0002\u00aa\u00ad\u0003\u0002\u0002\u0002",
    "\u00ab\u00a9\u0003\u0002\u0002\u0002\u00ab\u00ac\u0003\u0002\u0002\u0002",
    "\u00ac\u00ae\u0003\u0002\u0002\u0002\u00ad\u00ab\u0003\u0002\u0002\u0002",
    "\u00ae\u00af\u0007\u000b\u0002\u0002\u00af\u00b1\u0003\u0002\u0002\u0002",
    "\u00b0\u009b\u0003\u0002\u0002\u0002\u00b0\u00a2\u0003\u0002\u0002\u0002",
    "\u00b1\u001b\u0003\u0002\u0002\u0002\u00b2\u00b3\u0007\"\u0002\u0002",
    "\u00b3\u00be\u0005\u0004\u0003\u0002\u00b4\u00b5\u0007\"\u0002\u0002",
    "\u00b5\u00b9\u0007\n\u0002\u0002\u00b6\u00b8\u0005\u0004\u0003\u0002",
    "\u00b7\u00b6\u0003\u0002\u0002\u0002\u00b8\u00bb\u0003\u0002\u0002\u0002",
    "\u00b9\u00b7\u0003\u0002\u0002\u0002\u00b9\u00ba\u0003\u0002\u0002\u0002",
    "\u00ba\u00bc\u0003\u0002\u0002\u0002\u00bb\u00b9\u0003\u0002\u0002\u0002",
    "\u00bc\u00be\u0007\u000b\u0002\u0002\u00bd\u00b2\u0003\u0002\u0002\u0002",
    "\u00bd\u00b4\u0003\u0002\u0002\u0002\u00be\u001d\u0003\u0002\u0002\u0002",
    "\u00bf\u00c0\b\u0010\u0001\u0002\u00c0\u0105\u0007>\u0002\u0002\u00c1",
    "\u0105\t\u0003\u0002\u0002\u00c2\u0105\t\u0004\u0002\u0002\u00c3\u00c4",
    "\u0007%\u0002\u0002\u00c4\u0105\u0005\u001e\u0010\u0011\u00c5\u00c6",
    "\u0007.\u0002\u0002\u00c6\u00c7\u0005\u001e\u0010\u0002\u00c7\u00d1",
    "\u0007\u000e\u0002\u0002\u00c8\u00c9\u0005\u001e\u0010\u0002\u00c9\u00ca",
    "\u0007\t\u0002\u0002\u00ca\u00cc\u0003\u0002\u0002\u0002\u00cb\u00c8",
    "\u0003\u0002\u0002\u0002\u00cc\u00cf\u0003\u0002\u0002\u0002\u00cd\u00cb",
    "\u0003\u0002\u0002\u0002\u00cd\u00ce\u0003\u0002\u0002\u0002\u00ce\u00d0",
    "\u0003\u0002\u0002\u0002\u00cf\u00cd\u0003\u0002\u0002\u0002\u00d0\u00d2",
    "\u0005\u001e\u0010\u0002\u00d1\u00cd\u0003\u0002\u0002\u0002\u00d1\u00d2",
    "\u0003\u0002\u0002\u0002\u00d2\u00d3\u0003\u0002\u0002\u0002\u00d3\u00d4",
    "\u0007\u000f\u0002\u0002\u00d4\u0105\u0003\u0002\u0002\u0002\u00d5\u0105",
    "\u0007;\u0002\u0002\u00d6\u0105\u0007<\u0002\u0002\u00d7\u00e1\u0007",
    "\u0011\u0002\u0002\u00d8\u00d9\u0005\u001e\u0010\u0002\u00d9\u00da\u0007",
    "\t\u0002\u0002\u00da\u00dc\u0003\u0002\u0002\u0002\u00db\u00d8\u0003",
    "\u0002\u0002\u0002\u00dc\u00df\u0003\u0002\u0002\u0002\u00dd\u00db\u0003",
    "\u0002\u0002\u0002\u00dd\u00de\u0003\u0002\u0002\u0002\u00de\u00e0\u0003",
    "\u0002\u0002\u0002\u00df\u00dd\u0003\u0002\u0002\u0002\u00e0\u00e2\u0005",
    "\u001e\u0010\u0002\u00e1\u00dd\u0003\u0002\u0002\u0002\u00e1\u00e2\u0003",
    "\u0002\u0002\u0002\u00e2\u00e3\u0003\u0002\u0002\u0002\u00e3\u0105\u0007",
    "\u0012\u0002\u0002\u00e4\u00e5\u00073\u0002\u0002\u00e5\u00e6\u0007",
    "\b\u0002\u0002\u00e6\u0105\u0007>\u0002\u0002\u00e7\u00e9\u00072\u0002",
    "\u0002\u00e8\u00ea\u0007>\u0002\u0002\u00e9\u00e8\u0003\u0002\u0002",
    "\u0002\u00e9\u00ea\u0003\u0002\u0002\u0002\u00ea\u00eb\u0003\u0002\u0002",
    "\u0002\u00eb\u00ec\u0005 \u0011\u0002\u00ec\u00f0\u0007\n\u0002\u0002",
    "\u00ed\u00ef\u0005\u0004\u0003\u0002\u00ee\u00ed\u0003\u0002\u0002\u0002",
    "\u00ef\u00f2\u0003\u0002\u0002\u0002\u00f0\u00ee\u0003\u0002\u0002\u0002",
    "\u00f0\u00f1\u0003\u0002\u0002\u0002\u00f1\u00f3\u0003\u0002\u0002\u0002",
    "\u00f2\u00f0\u0003\u0002\u0002\u0002\u00f3\u00f4\u0007\u000b\u0002\u0002",
    "\u00f4\u0105\u0003\u0002\u0002\u0002\u00f5\u00f7\u00072\u0002\u0002",
    "\u00f6\u00f8\u0007>\u0002\u0002\u00f7\u00f6\u0003\u0002\u0002\u0002",
    "\u00f7\u00f8\u0003\u0002\u0002\u0002\u00f8\u00fa\u0003\u0002\u0002\u0002",
    "\u00f9\u00f5\u0003\u0002\u0002\u0002\u00f9\u00fa\u0003\u0002\u0002\u0002",
    "\u00fa\u00fb\u0003\u0002\u0002\u0002\u00fb\u00fc\u0005 \u0011\u0002",
    "\u00fc\u00fd\u0007\u0005\u0002\u0002\u00fd\u00fe\u0005\u001e\u0010\u0006",
    "\u00fe\u0105\u0003\u0002\u0002\u0002\u00ff\u0105\u0007=\u0002\u0002",
    "\u0100\u0101\u0007\u000e\u0002\u0002\u0101\u0102\u0005\u001e\u0010\u0002",
    "\u0102\u0103\u0007\u000f\u0002\u0002\u0103\u0105\u0003\u0002\u0002\u0002",
    "\u0104\u00bf\u0003\u0002\u0002\u0002\u0104\u00c1\u0003\u0002\u0002\u0002",
    "\u0104\u00c2\u0003\u0002\u0002\u0002\u0104\u00c3\u0003\u0002\u0002\u0002",
    "\u0104\u00c5\u0003\u0002\u0002\u0002\u0104\u00d5\u0003\u0002\u0002\u0002",
    "\u0104\u00d6\u0003\u0002\u0002\u0002\u0104\u00d7\u0003\u0002\u0002\u0002",
    "\u0104\u00e4\u0003\u0002\u0002\u0002\u0104\u00e7\u0003\u0002\u0002\u0002",
    "\u0104\u00f9\u0003\u0002\u0002\u0002\u0104\u00ff\u0003\u0002\u0002\u0002",
    "\u0104\u0100\u0003\u0002\u0002\u0002\u0105\u0129\u0003\u0002\u0002\u0002",
    "\u0106\u0107\f\u000e\u0002\u0002\u0107\u0108\u0005\"\u0012\u0002\u0108",
    "\u0109\u0005\u001e\u0010\u000f\u0109\u0128\u0003\u0002\u0002\u0002\u010a",
    "\u010b\f\r\u0002\u0002\u010b\u010c\u0005$\u0013\u0002\u010c\u010d\u0005",
    "\u001e\u0010\u000e\u010d\u0128\u0003\u0002\u0002\u0002\u010e\u010f\f",
    "\u0005\u0002\u0002\u010f\u0110\u0007\u0007\u0002\u0002\u0110\u0128\u0005",
    "\u001e\u0010\u0006\u0111\u0112\f\u0015\u0002\u0002\u0112\u0113\u0007",
    "\f\u0002\u0002\u0113\u0128\u0007>\u0002\u0002\u0114\u0115\f\u000f\u0002",
    "\u0002\u0115\u011f\u0007\u000e\u0002\u0002\u0116\u0117\u0005\u001e\u0010",
    "\u0002\u0117\u0118\u0007\t\u0002\u0002\u0118\u011a\u0003\u0002\u0002",
    "\u0002\u0119\u0116\u0003\u0002\u0002\u0002\u011a\u011d\u0003\u0002\u0002",
    "\u0002\u011b\u0119\u0003\u0002\u0002\u0002\u011b\u011c\u0003\u0002\u0002",
    "\u0002\u011c\u011e\u0003\u0002\u0002\u0002\u011d\u011b\u0003\u0002\u0002",
    "\u0002\u011e\u0120\u0005\u001e\u0010\u0002\u011f\u011b\u0003\u0002\u0002",
    "\u0002\u011f\u0120\u0003\u0002\u0002\u0002\u0120\u0121\u0003\u0002\u0002",
    "\u0002\u0121\u0128\u0007\u000f\u0002\u0002\u0122\u0123\f\n\u0002\u0002",
    "\u0123\u0124\u0007\u0011\u0002\u0002\u0124\u0125\u0005\u001e\u0010\u0002",
    "\u0125\u0126\u0007\u0012\u0002\u0002\u0126\u0128\u0003\u0002\u0002\u0002",
    "\u0127\u0106\u0003\u0002\u0002\u0002\u0127\u010a\u0003\u0002\u0002\u0002",
    "\u0127\u010e\u0003\u0002\u0002\u0002\u0127\u0111\u0003\u0002\u0002\u0002",
    "\u0127\u0114\u0003\u0002\u0002\u0002\u0127\u0122\u0003\u0002\u0002\u0002",
    "\u0128\u012b\u0003\u0002\u0002\u0002\u0129\u0127\u0003\u0002\u0002\u0002",
    "\u0129\u012a\u0003\u0002\u0002\u0002\u012a\u001f\u0003\u0002\u0002\u0002",
    "\u012b\u0129\u0003\u0002\u0002\u0002\u012c\u0135\u0007\u000e\u0002\u0002",
    "\u012d\u012e\u0007>\u0002\u0002\u012e\u0130\u0007\t\u0002\u0002\u012f",
    "\u012d\u0003\u0002\u0002\u0002\u0130\u0133\u0003\u0002\u0002\u0002\u0131",
    "\u012f\u0003\u0002\u0002\u0002\u0131\u0132\u0003\u0002\u0002\u0002\u0132",
    "\u0134\u0003\u0002\u0002\u0002\u0133\u0131\u0003\u0002\u0002\u0002\u0134",
    "\u0136\u0007>\u0002\u0002\u0135\u0131\u0003\u0002\u0002\u0002\u0135",
    "\u0136\u0003\u0002\u0002\u0002\u0136\u0137\u0003\u0002\u0002\u0002\u0137",
    "\u013b\u0007\u000f\u0002\u0002\u0138\u013b\u0003\u0002\u0002\u0002\u0139",
    "\u013b\u0007>\u0002\u0002\u013a\u012c\u0003\u0002\u0002\u0002\u013a",
    "\u0138\u0003\u0002\u0002\u0002\u013a\u0139\u0003\u0002\u0002\u0002\u013b",
    "!\u0003\u0002\u0002\u0002\u013c\u013d\t\u0005\u0002\u0002\u013d#\u0003",
    "\u0002\u0002\u0002\u013e\u013f\t\u0006\u0002\u0002\u013f%\u0003\u0002",
    "\u0002\u0002$)58OSX_fjt\u0080\u0084\u0094\u0099\u00ab\u00b0\u00b9\u00bd",
    "\u00cd\u00d1\u00dd\u00e1\u00e9\u00f0\u00f7\u00f9\u0104\u011b\u011f\u0127",
    "\u0129\u0131\u0135\u013a"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, "'=>'", "'<-'", "'->'", "':'", "','", 
                     "'{'", "'}'", "'.'", "'='", "'('", "')'", "';'", "'['", 
                     "']'", "'^'", "'+'", "'-'", "'%'", "'*'", "'/'", "'$'", 
                     "'&'", "'|'", null, "'<<'", "'>>'", "'xor'", "'if'", 
                     "'elif'", "'else'", null, null, null, null, null, null, 
                     null, null, null, "'false'", "'true'", "'await'", "'break'", 
                     "'catch'", "'extern'", null, "'local'", null, "'throw'", 
                     "'try'", "'while'" ];

var symbolicNames = [ null, "SL_CMT", "WS", "ARR_FAT", "ARR_L", "ARR_R", 
                      "COLON", "COMMA", "CURLY_L", "CURLY_R", "DOT", "EQUALS", 
                      "PAREN_L", "PAREN_R", "SEMI", "SQUARE_L", "SQUARE_R", 
                      "CARET", "PLUS", "MINUS", "MODULO", "TIMES", "DIVIDE", 
                      "SUMMA", "BITWISE_AND", "BITWISE_OR", "BITWISE_NOT", 
                      "BITWISE_SHL", "BITWISE_SHR", "BITWISE_XOR", "IF", 
                      "ELIF", "ELSE", "IS", "NOT", "EXCLAMATION", "AND", 
                      "OR", "LT", "LTE", "GT", "GTE", "FALSE", "TRUE", "AWAIT", 
                      "BREAK", "CATCH", "EXTERN", "FN", "LOCAL", "RET", 
                      "THROW", "TRY", "WHILE", "DBL", "HEX", "INT", "RAW_STRING", 
                      "STRING", "REGEX_LITERAL", "ID" ];

var ruleNames =  [ "compilationUnit", "stmt", "assignStmt", "exprStmt", 
                   "breakStmt", "retStmt", "throwStmt", "tryStmt", "whileStmt", 
                   "externStmt", "ifStmt", "ifBlock", "elifBlock", "elseBlock", 
                   "expr", "paramSpec", "arithmeticOperator", "booleanOperator" ];

function ArrobaParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

ArrobaParser.prototype = Object.create(antlr4.Parser.prototype);
ArrobaParser.prototype.constructor = ArrobaParser;

Object.defineProperty(ArrobaParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

ArrobaParser.EOF = antlr4.Token.EOF;
ArrobaParser.SL_CMT = 1;
ArrobaParser.WS = 2;
ArrobaParser.ARR_FAT = 3;
ArrobaParser.ARR_L = 4;
ArrobaParser.ARR_R = 5;
ArrobaParser.COLON = 6;
ArrobaParser.COMMA = 7;
ArrobaParser.CURLY_L = 8;
ArrobaParser.CURLY_R = 9;
ArrobaParser.DOT = 10;
ArrobaParser.EQUALS = 11;
ArrobaParser.PAREN_L = 12;
ArrobaParser.PAREN_R = 13;
ArrobaParser.SEMI = 14;
ArrobaParser.SQUARE_L = 15;
ArrobaParser.SQUARE_R = 16;
ArrobaParser.CARET = 17;
ArrobaParser.PLUS = 18;
ArrobaParser.MINUS = 19;
ArrobaParser.MODULO = 20;
ArrobaParser.TIMES = 21;
ArrobaParser.DIVIDE = 22;
ArrobaParser.SUMMA = 23;
ArrobaParser.BITWISE_AND = 24;
ArrobaParser.BITWISE_OR = 25;
ArrobaParser.BITWISE_NOT = 26;
ArrobaParser.BITWISE_SHL = 27;
ArrobaParser.BITWISE_SHR = 28;
ArrobaParser.BITWISE_XOR = 29;
ArrobaParser.IF = 30;
ArrobaParser.ELIF = 31;
ArrobaParser.ELSE = 32;
ArrobaParser.IS = 33;
ArrobaParser.NOT = 34;
ArrobaParser.EXCLAMATION = 35;
ArrobaParser.AND = 36;
ArrobaParser.OR = 37;
ArrobaParser.LT = 38;
ArrobaParser.LTE = 39;
ArrobaParser.GT = 40;
ArrobaParser.GTE = 41;
ArrobaParser.FALSE = 42;
ArrobaParser.TRUE = 43;
ArrobaParser.AWAIT = 44;
ArrobaParser.BREAK = 45;
ArrobaParser.CATCH = 46;
ArrobaParser.EXTERN = 47;
ArrobaParser.FN = 48;
ArrobaParser.LOCAL = 49;
ArrobaParser.RET = 50;
ArrobaParser.THROW = 51;
ArrobaParser.TRY = 52;
ArrobaParser.WHILE = 53;
ArrobaParser.DBL = 54;
ArrobaParser.HEX = 55;
ArrobaParser.INT = 56;
ArrobaParser.RAW_STRING = 57;
ArrobaParser.STRING = 58;
ArrobaParser.REGEX_LITERAL = 59;
ArrobaParser.ID = 60;

ArrobaParser.RULE_compilationUnit = 0;
ArrobaParser.RULE_stmt = 1;
ArrobaParser.RULE_assignStmt = 2;
ArrobaParser.RULE_exprStmt = 3;
ArrobaParser.RULE_breakStmt = 4;
ArrobaParser.RULE_retStmt = 5;
ArrobaParser.RULE_throwStmt = 6;
ArrobaParser.RULE_tryStmt = 7;
ArrobaParser.RULE_whileStmt = 8;
ArrobaParser.RULE_externStmt = 9;
ArrobaParser.RULE_ifStmt = 10;
ArrobaParser.RULE_ifBlock = 11;
ArrobaParser.RULE_elifBlock = 12;
ArrobaParser.RULE_elseBlock = 13;
ArrobaParser.RULE_expr = 14;
ArrobaParser.RULE_paramSpec = 15;
ArrobaParser.RULE_arithmeticOperator = 16;
ArrobaParser.RULE_booleanOperator = 17;

function CompilationUnitContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ArrobaParser.RULE_compilationUnit;
    return this;
}

CompilationUnitContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CompilationUnitContext.prototype.constructor = CompilationUnitContext;

CompilationUnitContext.prototype.stmt = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StmtContext);
    } else {
        return this.getTypedRuleContext(StmtContext,i);
    }
};

CompilationUnitContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.enterCompilationUnit(this);
	}
};

CompilationUnitContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.exitCompilationUnit(this);
	}
};

CompilationUnitContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ArrobaVisitor ) {
        return visitor.visitCompilationUnit(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ArrobaParser.CompilationUnitContext = CompilationUnitContext;

ArrobaParser.prototype.compilationUnit = function() {

    var localctx = new CompilationUnitContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, ArrobaParser.RULE_compilationUnit);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 39;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ArrobaParser.ARR_FAT) | (1 << ArrobaParser.PAREN_L) | (1 << ArrobaParser.SQUARE_L) | (1 << ArrobaParser.IF))) !== 0) || ((((_la - 35)) & ~0x1f) == 0 && ((1 << (_la - 35)) & ((1 << (ArrobaParser.EXCLAMATION - 35)) | (1 << (ArrobaParser.FALSE - 35)) | (1 << (ArrobaParser.TRUE - 35)) | (1 << (ArrobaParser.AWAIT - 35)) | (1 << (ArrobaParser.BREAK - 35)) | (1 << (ArrobaParser.EXTERN - 35)) | (1 << (ArrobaParser.FN - 35)) | (1 << (ArrobaParser.LOCAL - 35)) | (1 << (ArrobaParser.RET - 35)) | (1 << (ArrobaParser.THROW - 35)) | (1 << (ArrobaParser.TRY - 35)) | (1 << (ArrobaParser.WHILE - 35)) | (1 << (ArrobaParser.DBL - 35)) | (1 << (ArrobaParser.HEX - 35)) | (1 << (ArrobaParser.INT - 35)) | (1 << (ArrobaParser.RAW_STRING - 35)) | (1 << (ArrobaParser.STRING - 35)) | (1 << (ArrobaParser.REGEX_LITERAL - 35)) | (1 << (ArrobaParser.ID - 35)))) !== 0)) {
            this.state = 36;
            this.stmt();
            this.state = 41;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ArrobaParser.RULE_stmt;
    return this;
}

StmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StmtContext.prototype.constructor = StmtContext;

StmtContext.prototype.assignStmt = function() {
    return this.getTypedRuleContext(AssignStmtContext,0);
};

StmtContext.prototype.exprStmt = function() {
    return this.getTypedRuleContext(ExprStmtContext,0);
};

StmtContext.prototype.ifStmt = function() {
    return this.getTypedRuleContext(IfStmtContext,0);
};

StmtContext.prototype.breakStmt = function() {
    return this.getTypedRuleContext(BreakStmtContext,0);
};

StmtContext.prototype.retStmt = function() {
    return this.getTypedRuleContext(RetStmtContext,0);
};

StmtContext.prototype.throwStmt = function() {
    return this.getTypedRuleContext(ThrowStmtContext,0);
};

StmtContext.prototype.tryStmt = function() {
    return this.getTypedRuleContext(TryStmtContext,0);
};

StmtContext.prototype.whileStmt = function() {
    return this.getTypedRuleContext(WhileStmtContext,0);
};

StmtContext.prototype.externStmt = function() {
    return this.getTypedRuleContext(ExternStmtContext,0);
};

StmtContext.prototype.SEMI = function() {
    return this.getToken(ArrobaParser.SEMI, 0);
};

StmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.enterStmt(this);
	}
};

StmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.exitStmt(this);
	}
};

StmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ArrobaVisitor ) {
        return visitor.visitStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ArrobaParser.StmtContext = StmtContext;

ArrobaParser.prototype.stmt = function() {

    var localctx = new StmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, ArrobaParser.RULE_stmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 51;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.state = 42;
            this.assignStmt();
            break;

        case 2:
            this.state = 43;
            this.exprStmt();
            break;

        case 3:
            this.state = 44;
            this.ifStmt();
            break;

        case 4:
            this.state = 45;
            this.breakStmt();
            break;

        case 5:
            this.state = 46;
            this.retStmt();
            break;

        case 6:
            this.state = 47;
            this.throwStmt();
            break;

        case 7:
            this.state = 48;
            this.tryStmt();
            break;

        case 8:
            this.state = 49;
            this.whileStmt();
            break;

        case 9:
            this.state = 50;
            this.externStmt();
            break;

        }
        this.state = 54;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        if(la_===1) {
            this.state = 53;
            this.match(ArrobaParser.SEMI);

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AssignStmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ArrobaParser.RULE_assignStmt;
    this.left = null; // ExprContext
    this.right = null; // ExprContext
    return this;
}

AssignStmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignStmtContext.prototype.constructor = AssignStmtContext;

AssignStmtContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

AssignStmtContext.prototype.ARR_L = function() {
    return this.getToken(ArrobaParser.ARR_L, 0);
};

AssignStmtContext.prototype.EQUALS = function() {
    return this.getToken(ArrobaParser.EQUALS, 0);
};

AssignStmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.enterAssignStmt(this);
	}
};

AssignStmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.exitAssignStmt(this);
	}
};

AssignStmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ArrobaVisitor ) {
        return visitor.visitAssignStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ArrobaParser.AssignStmtContext = AssignStmtContext;

ArrobaParser.prototype.assignStmt = function() {

    var localctx = new AssignStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, ArrobaParser.RULE_assignStmt);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 56;
        localctx.left = this.expr(0);
        this.state = 57;
        _la = this._input.LA(1);
        if(!(_la===ArrobaParser.ARR_L || _la===ArrobaParser.EQUALS)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
        this.state = 58;
        localctx.right = this.expr(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExprStmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ArrobaParser.RULE_exprStmt;
    return this;
}

ExprStmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprStmtContext.prototype.constructor = ExprStmtContext;

ExprStmtContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

ExprStmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.enterExprStmt(this);
	}
};

ExprStmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.exitExprStmt(this);
	}
};

ExprStmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ArrobaVisitor ) {
        return visitor.visitExprStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ArrobaParser.ExprStmtContext = ExprStmtContext;

ArrobaParser.prototype.exprStmt = function() {

    var localctx = new ExprStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, ArrobaParser.RULE_exprStmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 60;
        this.expr(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BreakStmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ArrobaParser.RULE_breakStmt;
    return this;
}

BreakStmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BreakStmtContext.prototype.constructor = BreakStmtContext;

BreakStmtContext.prototype.BREAK = function() {
    return this.getToken(ArrobaParser.BREAK, 0);
};

BreakStmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.enterBreakStmt(this);
	}
};

BreakStmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.exitBreakStmt(this);
	}
};

BreakStmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ArrobaVisitor ) {
        return visitor.visitBreakStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ArrobaParser.BreakStmtContext = BreakStmtContext;

ArrobaParser.prototype.breakStmt = function() {

    var localctx = new BreakStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, ArrobaParser.RULE_breakStmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 62;
        this.match(ArrobaParser.BREAK);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RetStmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ArrobaParser.RULE_retStmt;
    return this;
}

RetStmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RetStmtContext.prototype.constructor = RetStmtContext;

RetStmtContext.prototype.RET = function() {
    return this.getToken(ArrobaParser.RET, 0);
};

RetStmtContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

RetStmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.enterRetStmt(this);
	}
};

RetStmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.exitRetStmt(this);
	}
};

RetStmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ArrobaVisitor ) {
        return visitor.visitRetStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ArrobaParser.RetStmtContext = RetStmtContext;

ArrobaParser.prototype.retStmt = function() {

    var localctx = new RetStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, ArrobaParser.RULE_retStmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 64;
        this.match(ArrobaParser.RET);
        this.state = 65;
        this.expr(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ThrowStmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ArrobaParser.RULE_throwStmt;
    return this;
}

ThrowStmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ThrowStmtContext.prototype.constructor = ThrowStmtContext;

ThrowStmtContext.prototype.THROW = function() {
    return this.getToken(ArrobaParser.THROW, 0);
};

ThrowStmtContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

ThrowStmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.enterThrowStmt(this);
	}
};

ThrowStmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.exitThrowStmt(this);
	}
};

ThrowStmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ArrobaVisitor ) {
        return visitor.visitThrowStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ArrobaParser.ThrowStmtContext = ThrowStmtContext;

ArrobaParser.prototype.throwStmt = function() {

    var localctx = new ThrowStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, ArrobaParser.RULE_throwStmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 67;
        this.match(ArrobaParser.THROW);
        this.state = 68;
        this.expr(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TryStmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ArrobaParser.RULE_tryStmt;
    this._stmt = null; // StmtContext
    this.toTry = []; // of StmtContexts
    this.toCatch = []; // of StmtContexts
    return this;
}

TryStmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TryStmtContext.prototype.constructor = TryStmtContext;

TryStmtContext.prototype.TRY = function() {
    return this.getToken(ArrobaParser.TRY, 0);
};

TryStmtContext.prototype.CURLY_L = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ArrobaParser.CURLY_L);
    } else {
        return this.getToken(ArrobaParser.CURLY_L, i);
    }
};


TryStmtContext.prototype.CURLY_R = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ArrobaParser.CURLY_R);
    } else {
        return this.getToken(ArrobaParser.CURLY_R, i);
    }
};


TryStmtContext.prototype.CATCH = function() {
    return this.getToken(ArrobaParser.CATCH, 0);
};

TryStmtContext.prototype.PAREN_L = function() {
    return this.getToken(ArrobaParser.PAREN_L, 0);
};

TryStmtContext.prototype.PAREN_R = function() {
    return this.getToken(ArrobaParser.PAREN_R, 0);
};

TryStmtContext.prototype.stmt = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StmtContext);
    } else {
        return this.getTypedRuleContext(StmtContext,i);
    }
};

TryStmtContext.prototype.ID = function() {
    return this.getToken(ArrobaParser.ID, 0);
};

TryStmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.enterTryStmt(this);
	}
};

TryStmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.exitTryStmt(this);
	}
};

TryStmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ArrobaVisitor ) {
        return visitor.visitTryStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ArrobaParser.TryStmtContext = TryStmtContext;

ArrobaParser.prototype.tryStmt = function() {

    var localctx = new TryStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, ArrobaParser.RULE_tryStmt);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 81;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
        switch(la_) {
        case 1:
            this.state = 70;
            this.match(ArrobaParser.TRY);
            this.state = 71;
            localctx._stmt = this.stmt();
            localctx.toTry.push(localctx._stmt);
            break;

        case 2:
            this.state = 72;
            this.match(ArrobaParser.TRY);
            this.state = 73;
            this.match(ArrobaParser.CURLY_L);
            this.state = 77;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ArrobaParser.ARR_FAT) | (1 << ArrobaParser.PAREN_L) | (1 << ArrobaParser.SQUARE_L) | (1 << ArrobaParser.IF))) !== 0) || ((((_la - 35)) & ~0x1f) == 0 && ((1 << (_la - 35)) & ((1 << (ArrobaParser.EXCLAMATION - 35)) | (1 << (ArrobaParser.FALSE - 35)) | (1 << (ArrobaParser.TRUE - 35)) | (1 << (ArrobaParser.AWAIT - 35)) | (1 << (ArrobaParser.BREAK - 35)) | (1 << (ArrobaParser.EXTERN - 35)) | (1 << (ArrobaParser.FN - 35)) | (1 << (ArrobaParser.LOCAL - 35)) | (1 << (ArrobaParser.RET - 35)) | (1 << (ArrobaParser.THROW - 35)) | (1 << (ArrobaParser.TRY - 35)) | (1 << (ArrobaParser.WHILE - 35)) | (1 << (ArrobaParser.DBL - 35)) | (1 << (ArrobaParser.HEX - 35)) | (1 << (ArrobaParser.INT - 35)) | (1 << (ArrobaParser.RAW_STRING - 35)) | (1 << (ArrobaParser.STRING - 35)) | (1 << (ArrobaParser.REGEX_LITERAL - 35)) | (1 << (ArrobaParser.ID - 35)))) !== 0)) {
                this.state = 74;
                localctx._stmt = this.stmt();
                localctx.toTry.push(localctx._stmt);
                this.state = 79;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 80;
            this.match(ArrobaParser.CURLY_R);
            break;

        }
        this.state = 104;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
        switch(la_) {
        case 1:
            this.state = 83;
            this.match(ArrobaParser.CATCH);
            this.state = 84;
            this.match(ArrobaParser.PAREN_L);
            this.state = 86;
            _la = this._input.LA(1);
            if(_la===ArrobaParser.ID) {
                this.state = 85;
                this.match(ArrobaParser.ID);
            }

            this.state = 88;
            this.match(ArrobaParser.PAREN_R);
            this.state = 89;
            localctx._stmt = this.stmt();
            localctx.toCatch.push(localctx._stmt);
            break;

        case 2:
            this.state = 90;
            this.match(ArrobaParser.CATCH);
            this.state = 91;
            this.match(ArrobaParser.PAREN_L);
            this.state = 93;
            _la = this._input.LA(1);
            if(_la===ArrobaParser.ID) {
                this.state = 92;
                this.match(ArrobaParser.ID);
            }

            this.state = 95;
            this.match(ArrobaParser.PAREN_R);
            this.state = 96;
            this.match(ArrobaParser.CURLY_L);
            this.state = 100;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ArrobaParser.ARR_FAT) | (1 << ArrobaParser.PAREN_L) | (1 << ArrobaParser.SQUARE_L) | (1 << ArrobaParser.IF))) !== 0) || ((((_la - 35)) & ~0x1f) == 0 && ((1 << (_la - 35)) & ((1 << (ArrobaParser.EXCLAMATION - 35)) | (1 << (ArrobaParser.FALSE - 35)) | (1 << (ArrobaParser.TRUE - 35)) | (1 << (ArrobaParser.AWAIT - 35)) | (1 << (ArrobaParser.BREAK - 35)) | (1 << (ArrobaParser.EXTERN - 35)) | (1 << (ArrobaParser.FN - 35)) | (1 << (ArrobaParser.LOCAL - 35)) | (1 << (ArrobaParser.RET - 35)) | (1 << (ArrobaParser.THROW - 35)) | (1 << (ArrobaParser.TRY - 35)) | (1 << (ArrobaParser.WHILE - 35)) | (1 << (ArrobaParser.DBL - 35)) | (1 << (ArrobaParser.HEX - 35)) | (1 << (ArrobaParser.INT - 35)) | (1 << (ArrobaParser.RAW_STRING - 35)) | (1 << (ArrobaParser.STRING - 35)) | (1 << (ArrobaParser.REGEX_LITERAL - 35)) | (1 << (ArrobaParser.ID - 35)))) !== 0)) {
                this.state = 97;
                localctx._stmt = this.stmt();
                localctx.toCatch.push(localctx._stmt);
                this.state = 102;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 103;
            this.match(ArrobaParser.CURLY_R);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function WhileStmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ArrobaParser.RULE_whileStmt;
    return this;
}

WhileStmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WhileStmtContext.prototype.constructor = WhileStmtContext;

WhileStmtContext.prototype.WHILE = function() {
    return this.getToken(ArrobaParser.WHILE, 0);
};

WhileStmtContext.prototype.PAREN_L = function() {
    return this.getToken(ArrobaParser.PAREN_L, 0);
};

WhileStmtContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

WhileStmtContext.prototype.PAREN_R = function() {
    return this.getToken(ArrobaParser.PAREN_R, 0);
};

WhileStmtContext.prototype.CURLY_L = function() {
    return this.getToken(ArrobaParser.CURLY_L, 0);
};

WhileStmtContext.prototype.CURLY_R = function() {
    return this.getToken(ArrobaParser.CURLY_R, 0);
};

WhileStmtContext.prototype.stmt = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StmtContext);
    } else {
        return this.getTypedRuleContext(StmtContext,i);
    }
};

WhileStmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.enterWhileStmt(this);
	}
};

WhileStmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.exitWhileStmt(this);
	}
};

WhileStmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ArrobaVisitor ) {
        return visitor.visitWhileStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ArrobaParser.WhileStmtContext = WhileStmtContext;

ArrobaParser.prototype.whileStmt = function() {

    var localctx = new WhileStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, ArrobaParser.RULE_whileStmt);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 106;
        this.match(ArrobaParser.WHILE);
        this.state = 107;
        this.match(ArrobaParser.PAREN_L);
        this.state = 108;
        this.expr(0);
        this.state = 109;
        this.match(ArrobaParser.PAREN_R);
        this.state = 110;
        this.match(ArrobaParser.CURLY_L);
        this.state = 114;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ArrobaParser.ARR_FAT) | (1 << ArrobaParser.PAREN_L) | (1 << ArrobaParser.SQUARE_L) | (1 << ArrobaParser.IF))) !== 0) || ((((_la - 35)) & ~0x1f) == 0 && ((1 << (_la - 35)) & ((1 << (ArrobaParser.EXCLAMATION - 35)) | (1 << (ArrobaParser.FALSE - 35)) | (1 << (ArrobaParser.TRUE - 35)) | (1 << (ArrobaParser.AWAIT - 35)) | (1 << (ArrobaParser.BREAK - 35)) | (1 << (ArrobaParser.EXTERN - 35)) | (1 << (ArrobaParser.FN - 35)) | (1 << (ArrobaParser.LOCAL - 35)) | (1 << (ArrobaParser.RET - 35)) | (1 << (ArrobaParser.THROW - 35)) | (1 << (ArrobaParser.TRY - 35)) | (1 << (ArrobaParser.WHILE - 35)) | (1 << (ArrobaParser.DBL - 35)) | (1 << (ArrobaParser.HEX - 35)) | (1 << (ArrobaParser.INT - 35)) | (1 << (ArrobaParser.RAW_STRING - 35)) | (1 << (ArrobaParser.STRING - 35)) | (1 << (ArrobaParser.REGEX_LITERAL - 35)) | (1 << (ArrobaParser.ID - 35)))) !== 0)) {
            this.state = 111;
            this.stmt();
            this.state = 116;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 117;
        this.match(ArrobaParser.CURLY_R);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExternStmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ArrobaParser.RULE_externStmt;
    return this;
}

ExternStmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExternStmtContext.prototype.constructor = ExternStmtContext;

ExternStmtContext.prototype.EXTERN = function() {
    return this.getToken(ArrobaParser.EXTERN, 0);
};

ExternStmtContext.prototype.ID = function() {
    return this.getToken(ArrobaParser.ID, 0);
};

ExternStmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.enterExternStmt(this);
	}
};

ExternStmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.exitExternStmt(this);
	}
};

ExternStmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ArrobaVisitor ) {
        return visitor.visitExternStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ArrobaParser.ExternStmtContext = ExternStmtContext;

ArrobaParser.prototype.externStmt = function() {

    var localctx = new ExternStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, ArrobaParser.RULE_externStmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 119;
        this.match(ArrobaParser.EXTERN);
        this.state = 120;
        this.match(ArrobaParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IfStmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ArrobaParser.RULE_ifStmt;
    return this;
}

IfStmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfStmtContext.prototype.constructor = IfStmtContext;

IfStmtContext.prototype.ifBlock = function() {
    return this.getTypedRuleContext(IfBlockContext,0);
};

IfStmtContext.prototype.elifBlock = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ElifBlockContext);
    } else {
        return this.getTypedRuleContext(ElifBlockContext,i);
    }
};

IfStmtContext.prototype.elseBlock = function() {
    return this.getTypedRuleContext(ElseBlockContext,0);
};

IfStmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.enterIfStmt(this);
	}
};

IfStmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.exitIfStmt(this);
	}
};

IfStmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ArrobaVisitor ) {
        return visitor.visitIfStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ArrobaParser.IfStmtContext = IfStmtContext;

ArrobaParser.prototype.ifStmt = function() {

    var localctx = new IfStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, ArrobaParser.RULE_ifStmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 122;
        this.ifBlock();
        this.state = 126;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 123;
                this.elifBlock(); 
            }
            this.state = 128;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
        }

        this.state = 130;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
        if(la_===1) {
            this.state = 129;
            this.elseBlock();

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IfBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ArrobaParser.RULE_ifBlock;
    return this;
}

IfBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfBlockContext.prototype.constructor = IfBlockContext;

IfBlockContext.prototype.IF = function() {
    return this.getToken(ArrobaParser.IF, 0);
};

IfBlockContext.prototype.PAREN_L = function() {
    return this.getToken(ArrobaParser.PAREN_L, 0);
};

IfBlockContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

IfBlockContext.prototype.PAREN_R = function() {
    return this.getToken(ArrobaParser.PAREN_R, 0);
};

IfBlockContext.prototype.stmt = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StmtContext);
    } else {
        return this.getTypedRuleContext(StmtContext,i);
    }
};

IfBlockContext.prototype.CURLY_L = function() {
    return this.getToken(ArrobaParser.CURLY_L, 0);
};

IfBlockContext.prototype.CURLY_R = function() {
    return this.getToken(ArrobaParser.CURLY_R, 0);
};

IfBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.enterIfBlock(this);
	}
};

IfBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.exitIfBlock(this);
	}
};

IfBlockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ArrobaVisitor ) {
        return visitor.visitIfBlock(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ArrobaParser.IfBlockContext = IfBlockContext;

ArrobaParser.prototype.ifBlock = function() {

    var localctx = new IfBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, ArrobaParser.RULE_ifBlock);
    var _la = 0; // Token type
    try {
        this.state = 151;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 132;
            this.match(ArrobaParser.IF);
            this.state = 133;
            this.match(ArrobaParser.PAREN_L);
            this.state = 134;
            this.expr(0);
            this.state = 135;
            this.match(ArrobaParser.PAREN_R);
            this.state = 136;
            this.stmt();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 138;
            this.match(ArrobaParser.IF);
            this.state = 139;
            this.match(ArrobaParser.PAREN_L);
            this.state = 140;
            this.expr(0);
            this.state = 141;
            this.match(ArrobaParser.PAREN_R);
            this.state = 142;
            this.match(ArrobaParser.CURLY_L);
            this.state = 146;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ArrobaParser.ARR_FAT) | (1 << ArrobaParser.PAREN_L) | (1 << ArrobaParser.SQUARE_L) | (1 << ArrobaParser.IF))) !== 0) || ((((_la - 35)) & ~0x1f) == 0 && ((1 << (_la - 35)) & ((1 << (ArrobaParser.EXCLAMATION - 35)) | (1 << (ArrobaParser.FALSE - 35)) | (1 << (ArrobaParser.TRUE - 35)) | (1 << (ArrobaParser.AWAIT - 35)) | (1 << (ArrobaParser.BREAK - 35)) | (1 << (ArrobaParser.EXTERN - 35)) | (1 << (ArrobaParser.FN - 35)) | (1 << (ArrobaParser.LOCAL - 35)) | (1 << (ArrobaParser.RET - 35)) | (1 << (ArrobaParser.THROW - 35)) | (1 << (ArrobaParser.TRY - 35)) | (1 << (ArrobaParser.WHILE - 35)) | (1 << (ArrobaParser.DBL - 35)) | (1 << (ArrobaParser.HEX - 35)) | (1 << (ArrobaParser.INT - 35)) | (1 << (ArrobaParser.RAW_STRING - 35)) | (1 << (ArrobaParser.STRING - 35)) | (1 << (ArrobaParser.REGEX_LITERAL - 35)) | (1 << (ArrobaParser.ID - 35)))) !== 0)) {
                this.state = 143;
                this.stmt();
                this.state = 148;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 149;
            this.match(ArrobaParser.CURLY_R);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ElifBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ArrobaParser.RULE_elifBlock;
    return this;
}

ElifBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElifBlockContext.prototype.constructor = ElifBlockContext;

ElifBlockContext.prototype.ELSE = function() {
    return this.getToken(ArrobaParser.ELSE, 0);
};

ElifBlockContext.prototype.IF = function() {
    return this.getToken(ArrobaParser.IF, 0);
};

ElifBlockContext.prototype.PAREN_L = function() {
    return this.getToken(ArrobaParser.PAREN_L, 0);
};

ElifBlockContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

ElifBlockContext.prototype.PAREN_R = function() {
    return this.getToken(ArrobaParser.PAREN_R, 0);
};

ElifBlockContext.prototype.stmt = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StmtContext);
    } else {
        return this.getTypedRuleContext(StmtContext,i);
    }
};

ElifBlockContext.prototype.CURLY_L = function() {
    return this.getToken(ArrobaParser.CURLY_L, 0);
};

ElifBlockContext.prototype.CURLY_R = function() {
    return this.getToken(ArrobaParser.CURLY_R, 0);
};

ElifBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.enterElifBlock(this);
	}
};

ElifBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.exitElifBlock(this);
	}
};

ElifBlockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ArrobaVisitor ) {
        return visitor.visitElifBlock(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ArrobaParser.ElifBlockContext = ElifBlockContext;

ArrobaParser.prototype.elifBlock = function() {

    var localctx = new ElifBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, ArrobaParser.RULE_elifBlock);
    var _la = 0; // Token type
    try {
        this.state = 174;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 153;
            this.match(ArrobaParser.ELSE);
            this.state = 154;
            this.match(ArrobaParser.IF);
            this.state = 155;
            this.match(ArrobaParser.PAREN_L);
            this.state = 156;
            this.expr(0);
            this.state = 157;
            this.match(ArrobaParser.PAREN_R);
            this.state = 158;
            this.stmt();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 160;
            this.match(ArrobaParser.ELSE);
            this.state = 161;
            this.match(ArrobaParser.IF);
            this.state = 162;
            this.match(ArrobaParser.PAREN_L);
            this.state = 163;
            this.expr(0);
            this.state = 164;
            this.match(ArrobaParser.PAREN_R);
            this.state = 165;
            this.match(ArrobaParser.CURLY_L);
            this.state = 169;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ArrobaParser.ARR_FAT) | (1 << ArrobaParser.PAREN_L) | (1 << ArrobaParser.SQUARE_L) | (1 << ArrobaParser.IF))) !== 0) || ((((_la - 35)) & ~0x1f) == 0 && ((1 << (_la - 35)) & ((1 << (ArrobaParser.EXCLAMATION - 35)) | (1 << (ArrobaParser.FALSE - 35)) | (1 << (ArrobaParser.TRUE - 35)) | (1 << (ArrobaParser.AWAIT - 35)) | (1 << (ArrobaParser.BREAK - 35)) | (1 << (ArrobaParser.EXTERN - 35)) | (1 << (ArrobaParser.FN - 35)) | (1 << (ArrobaParser.LOCAL - 35)) | (1 << (ArrobaParser.RET - 35)) | (1 << (ArrobaParser.THROW - 35)) | (1 << (ArrobaParser.TRY - 35)) | (1 << (ArrobaParser.WHILE - 35)) | (1 << (ArrobaParser.DBL - 35)) | (1 << (ArrobaParser.HEX - 35)) | (1 << (ArrobaParser.INT - 35)) | (1 << (ArrobaParser.RAW_STRING - 35)) | (1 << (ArrobaParser.STRING - 35)) | (1 << (ArrobaParser.REGEX_LITERAL - 35)) | (1 << (ArrobaParser.ID - 35)))) !== 0)) {
                this.state = 166;
                this.stmt();
                this.state = 171;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 172;
            this.match(ArrobaParser.CURLY_R);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ElseBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ArrobaParser.RULE_elseBlock;
    return this;
}

ElseBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElseBlockContext.prototype.constructor = ElseBlockContext;

ElseBlockContext.prototype.ELSE = function() {
    return this.getToken(ArrobaParser.ELSE, 0);
};

ElseBlockContext.prototype.stmt = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StmtContext);
    } else {
        return this.getTypedRuleContext(StmtContext,i);
    }
};

ElseBlockContext.prototype.CURLY_L = function() {
    return this.getToken(ArrobaParser.CURLY_L, 0);
};

ElseBlockContext.prototype.CURLY_R = function() {
    return this.getToken(ArrobaParser.CURLY_R, 0);
};

ElseBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.enterElseBlock(this);
	}
};

ElseBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.exitElseBlock(this);
	}
};

ElseBlockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ArrobaVisitor ) {
        return visitor.visitElseBlock(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ArrobaParser.ElseBlockContext = ElseBlockContext;

ArrobaParser.prototype.elseBlock = function() {

    var localctx = new ElseBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, ArrobaParser.RULE_elseBlock);
    var _la = 0; // Token type
    try {
        this.state = 187;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 176;
            this.match(ArrobaParser.ELSE);
            this.state = 177;
            this.stmt();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 178;
            this.match(ArrobaParser.ELSE);
            this.state = 179;
            this.match(ArrobaParser.CURLY_L);
            this.state = 183;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ArrobaParser.ARR_FAT) | (1 << ArrobaParser.PAREN_L) | (1 << ArrobaParser.SQUARE_L) | (1 << ArrobaParser.IF))) !== 0) || ((((_la - 35)) & ~0x1f) == 0 && ((1 << (_la - 35)) & ((1 << (ArrobaParser.EXCLAMATION - 35)) | (1 << (ArrobaParser.FALSE - 35)) | (1 << (ArrobaParser.TRUE - 35)) | (1 << (ArrobaParser.AWAIT - 35)) | (1 << (ArrobaParser.BREAK - 35)) | (1 << (ArrobaParser.EXTERN - 35)) | (1 << (ArrobaParser.FN - 35)) | (1 << (ArrobaParser.LOCAL - 35)) | (1 << (ArrobaParser.RET - 35)) | (1 << (ArrobaParser.THROW - 35)) | (1 << (ArrobaParser.TRY - 35)) | (1 << (ArrobaParser.WHILE - 35)) | (1 << (ArrobaParser.DBL - 35)) | (1 << (ArrobaParser.HEX - 35)) | (1 << (ArrobaParser.INT - 35)) | (1 << (ArrobaParser.RAW_STRING - 35)) | (1 << (ArrobaParser.STRING - 35)) | (1 << (ArrobaParser.REGEX_LITERAL - 35)) | (1 << (ArrobaParser.ID - 35)))) !== 0)) {
                this.state = 180;
                this.stmt();
                this.state = 185;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 186;
            this.match(ArrobaParser.CURLY_R);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ArrobaParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;


 
ExprContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function StringExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StringExprContext.prototype = Object.create(ExprContext.prototype);
StringExprContext.prototype.constructor = StringExprContext;

ArrobaParser.StringExprContext = StringExprContext;

StringExprContext.prototype.STRING = function() {
    return this.getToken(ArrobaParser.STRING, 0);
};
StringExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.enterStringExpr(this);
	}
};

StringExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.exitStringExpr(this);
	}
};

StringExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ArrobaVisitor ) {
        return visitor.visitStringExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BoolExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.left = null; // ExprContext;
    this.right = null; // ExprContext;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BoolExprContext.prototype = Object.create(ExprContext.prototype);
BoolExprContext.prototype.constructor = BoolExprContext;

ArrobaParser.BoolExprContext = BoolExprContext;

BoolExprContext.prototype.booleanOperator = function() {
    return this.getTypedRuleContext(BooleanOperatorContext,0);
};

BoolExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
BoolExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.enterBoolExpr(this);
	}
};

BoolExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.exitBoolExpr(this);
	}
};

BoolExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ArrobaVisitor ) {
        return visitor.visitBoolExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FunctionExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FunctionExprContext.prototype = Object.create(ExprContext.prototype);
FunctionExprContext.prototype.constructor = FunctionExprContext;

ArrobaParser.FunctionExprContext = FunctionExprContext;

FunctionExprContext.prototype.FN = function() {
    return this.getToken(ArrobaParser.FN, 0);
};

FunctionExprContext.prototype.paramSpec = function() {
    return this.getTypedRuleContext(ParamSpecContext,0);
};

FunctionExprContext.prototype.CURLY_L = function() {
    return this.getToken(ArrobaParser.CURLY_L, 0);
};

FunctionExprContext.prototype.CURLY_R = function() {
    return this.getToken(ArrobaParser.CURLY_R, 0);
};

FunctionExprContext.prototype.ID = function() {
    return this.getToken(ArrobaParser.ID, 0);
};

FunctionExprContext.prototype.stmt = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StmtContext);
    } else {
        return this.getTypedRuleContext(StmtContext,i);
    }
};
FunctionExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.enterFunctionExpr(this);
	}
};

FunctionExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.exitFunctionExpr(this);
	}
};

FunctionExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ArrobaVisitor ) {
        return visitor.visitFunctionExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IdExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IdExprContext.prototype = Object.create(ExprContext.prototype);
IdExprContext.prototype.constructor = IdExprContext;

ArrobaParser.IdExprContext = IdExprContext;

IdExprContext.prototype.ID = function() {
    return this.getToken(ArrobaParser.ID, 0);
};
IdExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.enterIdExpr(this);
	}
};

IdExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.exitIdExpr(this);
	}
};

IdExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ArrobaVisitor ) {
        return visitor.visitIdExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function RegexLiteralExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RegexLiteralExprContext.prototype = Object.create(ExprContext.prototype);
RegexLiteralExprContext.prototype.constructor = RegexLiteralExprContext;

ArrobaParser.RegexLiteralExprContext = RegexLiteralExprContext;

RegexLiteralExprContext.prototype.REGEX_LITERAL = function() {
    return this.getToken(ArrobaParser.REGEX_LITERAL, 0);
};
RegexLiteralExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.enterRegexLiteralExpr(this);
	}
};

RegexLiteralExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.exitRegexLiteralExpr(this);
	}
};

RegexLiteralExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ArrobaVisitor ) {
        return visitor.visitRegexLiteralExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function InlineFunctionExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

InlineFunctionExprContext.prototype = Object.create(ExprContext.prototype);
InlineFunctionExprContext.prototype.constructor = InlineFunctionExprContext;

ArrobaParser.InlineFunctionExprContext = InlineFunctionExprContext;

InlineFunctionExprContext.prototype.paramSpec = function() {
    return this.getTypedRuleContext(ParamSpecContext,0);
};

InlineFunctionExprContext.prototype.ARR_FAT = function() {
    return this.getToken(ArrobaParser.ARR_FAT, 0);
};

InlineFunctionExprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

InlineFunctionExprContext.prototype.FN = function() {
    return this.getToken(ArrobaParser.FN, 0);
};

InlineFunctionExprContext.prototype.ID = function() {
    return this.getToken(ArrobaParser.ID, 0);
};
InlineFunctionExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.enterInlineFunctionExpr(this);
	}
};

InlineFunctionExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.exitInlineFunctionExpr(this);
	}
};

InlineFunctionExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ArrobaVisitor ) {
        return visitor.visitInlineFunctionExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IndexExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.target = null; // ExprContext;
    this.index = null; // ExprContext;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IndexExprContext.prototype = Object.create(ExprContext.prototype);
IndexExprContext.prototype.constructor = IndexExprContext;

ArrobaParser.IndexExprContext = IndexExprContext;

IndexExprContext.prototype.SQUARE_L = function() {
    return this.getToken(ArrobaParser.SQUARE_L, 0);
};

IndexExprContext.prototype.SQUARE_R = function() {
    return this.getToken(ArrobaParser.SQUARE_R, 0);
};

IndexExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
IndexExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.enterIndexExpr(this);
	}
};

IndexExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.exitIndexExpr(this);
	}
};

IndexExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ArrobaVisitor ) {
        return visitor.visitIndexExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function RawStringExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RawStringExprContext.prototype = Object.create(ExprContext.prototype);
RawStringExprContext.prototype.constructor = RawStringExprContext;

ArrobaParser.RawStringExprContext = RawStringExprContext;

RawStringExprContext.prototype.RAW_STRING = function() {
    return this.getToken(ArrobaParser.RAW_STRING, 0);
};
RawStringExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.enterRawStringExpr(this);
	}
};

RawStringExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.exitRawStringExpr(this);
	}
};

RawStringExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ArrobaVisitor ) {
        return visitor.visitRawStringExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AwaitExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.target = null; // ExprContext;
    this._expr = null; // ExprContext;
    this.args = []; // of ExprContexts;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AwaitExprContext.prototype = Object.create(ExprContext.prototype);
AwaitExprContext.prototype.constructor = AwaitExprContext;

ArrobaParser.AwaitExprContext = AwaitExprContext;

AwaitExprContext.prototype.AWAIT = function() {
    return this.getToken(ArrobaParser.AWAIT, 0);
};

AwaitExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

AwaitExprContext.prototype.PAREN_L = function() {
    return this.getToken(ArrobaParser.PAREN_L, 0);
};

AwaitExprContext.prototype.PAREN_R = function() {
    return this.getToken(ArrobaParser.PAREN_R, 0);
};

AwaitExprContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ArrobaParser.COMMA);
    } else {
        return this.getToken(ArrobaParser.COMMA, i);
    }
};

AwaitExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.enterAwaitExpr(this);
	}
};

AwaitExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.exitAwaitExpr(this);
	}
};

AwaitExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ArrobaVisitor ) {
        return visitor.visitAwaitExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ArrayExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ArrayExprContext.prototype = Object.create(ExprContext.prototype);
ArrayExprContext.prototype.constructor = ArrayExprContext;

ArrobaParser.ArrayExprContext = ArrayExprContext;

ArrayExprContext.prototype.SQUARE_L = function() {
    return this.getToken(ArrobaParser.SQUARE_L, 0);
};

ArrayExprContext.prototype.SQUARE_R = function() {
    return this.getToken(ArrobaParser.SQUARE_R, 0);
};

ArrayExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ArrayExprContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ArrobaParser.COMMA);
    } else {
        return this.getToken(ArrobaParser.COMMA, i);
    }
};

ArrayExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.enterArrayExpr(this);
	}
};

ArrayExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.exitArrayExpr(this);
	}
};

ArrayExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ArrobaVisitor ) {
        return visitor.visitArrayExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NumExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NumExprContext.prototype = Object.create(ExprContext.prototype);
NumExprContext.prototype.constructor = NumExprContext;

ArrobaParser.NumExprContext = NumExprContext;

NumExprContext.prototype.INT = function() {
    return this.getToken(ArrobaParser.INT, 0);
};

NumExprContext.prototype.HEX = function() {
    return this.getToken(ArrobaParser.HEX, 0);
};

NumExprContext.prototype.DBL = function() {
    return this.getToken(ArrobaParser.DBL, 0);
};
NumExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.enterNumExpr(this);
	}
};

NumExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.exitNumExpr(this);
	}
};

NumExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ArrobaVisitor ) {
        return visitor.visitNumExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function LocalExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LocalExprContext.prototype = Object.create(ExprContext.prototype);
LocalExprContext.prototype.constructor = LocalExprContext;

ArrobaParser.LocalExprContext = LocalExprContext;

LocalExprContext.prototype.LOCAL = function() {
    return this.getToken(ArrobaParser.LOCAL, 0);
};

LocalExprContext.prototype.COLON = function() {
    return this.getToken(ArrobaParser.COLON, 0);
};

LocalExprContext.prototype.ID = function() {
    return this.getToken(ArrobaParser.ID, 0);
};
LocalExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.enterLocalExpr(this);
	}
};

LocalExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.exitLocalExpr(this);
	}
};

LocalExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ArrobaVisitor ) {
        return visitor.visitLocalExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function MemberExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MemberExprContext.prototype = Object.create(ExprContext.prototype);
MemberExprContext.prototype.constructor = MemberExprContext;

ArrobaParser.MemberExprContext = MemberExprContext;

MemberExprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

MemberExprContext.prototype.DOT = function() {
    return this.getToken(ArrobaParser.DOT, 0);
};

MemberExprContext.prototype.ID = function() {
    return this.getToken(ArrobaParser.ID, 0);
};
MemberExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.enterMemberExpr(this);
	}
};

MemberExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.exitMemberExpr(this);
	}
};

MemberExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ArrobaVisitor ) {
        return visitor.visitMemberExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ConstBoolExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ConstBoolExprContext.prototype = Object.create(ExprContext.prototype);
ConstBoolExprContext.prototype.constructor = ConstBoolExprContext;

ArrobaParser.ConstBoolExprContext = ConstBoolExprContext;

ConstBoolExprContext.prototype.TRUE = function() {
    return this.getToken(ArrobaParser.TRUE, 0);
};

ConstBoolExprContext.prototype.FALSE = function() {
    return this.getToken(ArrobaParser.FALSE, 0);
};
ConstBoolExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.enterConstBoolExpr(this);
	}
};

ConstBoolExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.exitConstBoolExpr(this);
	}
};

ConstBoolExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ArrobaVisitor ) {
        return visitor.visitConstBoolExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NestedExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NestedExprContext.prototype = Object.create(ExprContext.prototype);
NestedExprContext.prototype.constructor = NestedExprContext;

ArrobaParser.NestedExprContext = NestedExprContext;

NestedExprContext.prototype.PAREN_L = function() {
    return this.getToken(ArrobaParser.PAREN_L, 0);
};

NestedExprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

NestedExprContext.prototype.PAREN_R = function() {
    return this.getToken(ArrobaParser.PAREN_R, 0);
};
NestedExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.enterNestedExpr(this);
	}
};

NestedExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.exitNestedExpr(this);
	}
};

NestedExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ArrobaVisitor ) {
        return visitor.visitNestedExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function MathExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.left = null; // ExprContext;
    this.right = null; // ExprContext;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MathExprContext.prototype = Object.create(ExprContext.prototype);
MathExprContext.prototype.constructor = MathExprContext;

ArrobaParser.MathExprContext = MathExprContext;

MathExprContext.prototype.arithmeticOperator = function() {
    return this.getTypedRuleContext(ArithmeticOperatorContext,0);
};

MathExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
MathExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.enterMathExpr(this);
	}
};

MathExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.exitMathExpr(this);
	}
};

MathExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ArrobaVisitor ) {
        return visitor.visitMathExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ArrowRightExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.left = null; // ExprContext;
    this.right = null; // ExprContext;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ArrowRightExprContext.prototype = Object.create(ExprContext.prototype);
ArrowRightExprContext.prototype.constructor = ArrowRightExprContext;

ArrobaParser.ArrowRightExprContext = ArrowRightExprContext;

ArrowRightExprContext.prototype.ARR_R = function() {
    return this.getToken(ArrobaParser.ARR_R, 0);
};

ArrowRightExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
ArrowRightExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.enterArrowRightExpr(this);
	}
};

ArrowRightExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.exitArrowRightExpr(this);
	}
};

ArrowRightExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ArrobaVisitor ) {
        return visitor.visitArrowRightExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function InvocationExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.target = null; // ExprContext;
    this._expr = null; // ExprContext;
    this.args = []; // of ExprContexts;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

InvocationExprContext.prototype = Object.create(ExprContext.prototype);
InvocationExprContext.prototype.constructor = InvocationExprContext;

ArrobaParser.InvocationExprContext = InvocationExprContext;

InvocationExprContext.prototype.PAREN_L = function() {
    return this.getToken(ArrobaParser.PAREN_L, 0);
};

InvocationExprContext.prototype.PAREN_R = function() {
    return this.getToken(ArrobaParser.PAREN_R, 0);
};

InvocationExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

InvocationExprContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ArrobaParser.COMMA);
    } else {
        return this.getToken(ArrobaParser.COMMA, i);
    }
};

InvocationExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.enterInvocationExpr(this);
	}
};

InvocationExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.exitInvocationExpr(this);
	}
};

InvocationExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ArrobaVisitor ) {
        return visitor.visitInvocationExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NegationExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NegationExprContext.prototype = Object.create(ExprContext.prototype);
NegationExprContext.prototype.constructor = NegationExprContext;

ArrobaParser.NegationExprContext = NegationExprContext;

NegationExprContext.prototype.EXCLAMATION = function() {
    return this.getToken(ArrobaParser.EXCLAMATION, 0);
};

NegationExprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
NegationExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.enterNegationExpr(this);
	}
};

NegationExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.exitNegationExpr(this);
	}
};

NegationExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ArrobaVisitor ) {
        return visitor.visitNegationExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};



ArrobaParser.prototype.expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 28;
    this.enterRecursionRule(localctx, 28, ArrobaParser.RULE_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 258;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
        switch(la_) {
        case 1:
            localctx = new IdExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 190;
            this.match(ArrobaParser.ID);
            break;

        case 2:
            localctx = new NumExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 191;
            _la = this._input.LA(1);
            if(!(((((_la - 54)) & ~0x1f) == 0 && ((1 << (_la - 54)) & ((1 << (ArrobaParser.DBL - 54)) | (1 << (ArrobaParser.HEX - 54)) | (1 << (ArrobaParser.INT - 54)))) !== 0))) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            break;

        case 3:
            localctx = new ConstBoolExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 192;
            _la = this._input.LA(1);
            if(!(_la===ArrobaParser.FALSE || _la===ArrobaParser.TRUE)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            break;

        case 4:
            localctx = new NegationExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 193;
            this.match(ArrobaParser.EXCLAMATION);
            this.state = 194;
            this.expr(15);
            break;

        case 5:
            localctx = new AwaitExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 195;
            this.match(ArrobaParser.AWAIT);
            this.state = 196;
            localctx.target = this.expr(0);

            this.state = 197;
            this.match(ArrobaParser.PAREN_L);
            this.state = 207;
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ArrobaParser.ARR_FAT) | (1 << ArrobaParser.PAREN_L) | (1 << ArrobaParser.SQUARE_L))) !== 0) || ((((_la - 35)) & ~0x1f) == 0 && ((1 << (_la - 35)) & ((1 << (ArrobaParser.EXCLAMATION - 35)) | (1 << (ArrobaParser.FALSE - 35)) | (1 << (ArrobaParser.TRUE - 35)) | (1 << (ArrobaParser.AWAIT - 35)) | (1 << (ArrobaParser.FN - 35)) | (1 << (ArrobaParser.LOCAL - 35)) | (1 << (ArrobaParser.DBL - 35)) | (1 << (ArrobaParser.HEX - 35)) | (1 << (ArrobaParser.INT - 35)) | (1 << (ArrobaParser.RAW_STRING - 35)) | (1 << (ArrobaParser.STRING - 35)) | (1 << (ArrobaParser.REGEX_LITERAL - 35)) | (1 << (ArrobaParser.ID - 35)))) !== 0)) {
                this.state = 203;
                this._errHandler.sync(this);
                var _alt = this._interp.adaptivePredict(this._input,18,this._ctx)
                while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                    if(_alt===1) {
                        this.state = 198;
                        localctx._expr = this.expr(0);
                        localctx.args.push(localctx._expr);
                        this.state = 199;
                        this.match(ArrobaParser.COMMA); 
                    }
                    this.state = 205;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input,18,this._ctx);
                }

                this.state = 206;
                localctx._expr = this.expr(0);
                localctx.args.push(localctx._expr);
            }

            this.state = 209;
            this.match(ArrobaParser.PAREN_R);
            break;

        case 6:
            localctx = new RawStringExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 211;
            this.match(ArrobaParser.RAW_STRING);
            break;

        case 7:
            localctx = new StringExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 212;
            this.match(ArrobaParser.STRING);
            break;

        case 8:
            localctx = new ArrayExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 213;
            this.match(ArrobaParser.SQUARE_L);
            this.state = 223;
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ArrobaParser.ARR_FAT) | (1 << ArrobaParser.PAREN_L) | (1 << ArrobaParser.SQUARE_L))) !== 0) || ((((_la - 35)) & ~0x1f) == 0 && ((1 << (_la - 35)) & ((1 << (ArrobaParser.EXCLAMATION - 35)) | (1 << (ArrobaParser.FALSE - 35)) | (1 << (ArrobaParser.TRUE - 35)) | (1 << (ArrobaParser.AWAIT - 35)) | (1 << (ArrobaParser.FN - 35)) | (1 << (ArrobaParser.LOCAL - 35)) | (1 << (ArrobaParser.DBL - 35)) | (1 << (ArrobaParser.HEX - 35)) | (1 << (ArrobaParser.INT - 35)) | (1 << (ArrobaParser.RAW_STRING - 35)) | (1 << (ArrobaParser.STRING - 35)) | (1 << (ArrobaParser.REGEX_LITERAL - 35)) | (1 << (ArrobaParser.ID - 35)))) !== 0)) {
                this.state = 219;
                this._errHandler.sync(this);
                var _alt = this._interp.adaptivePredict(this._input,20,this._ctx)
                while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                    if(_alt===1) {
                        this.state = 214;
                        this.expr(0);
                        this.state = 215;
                        this.match(ArrobaParser.COMMA); 
                    }
                    this.state = 221;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input,20,this._ctx);
                }

                this.state = 222;
                this.expr(0);
            }

            this.state = 225;
            this.match(ArrobaParser.SQUARE_R);
            break;

        case 9:
            localctx = new LocalExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 226;
            this.match(ArrobaParser.LOCAL);
            this.state = 227;
            this.match(ArrobaParser.COLON);
            this.state = 228;
            this.match(ArrobaParser.ID);
            break;

        case 10:
            localctx = new FunctionExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 229;
            this.match(ArrobaParser.FN);
            this.state = 231;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
            if(la_===1) {
                this.state = 230;
                this.match(ArrobaParser.ID);

            }
            this.state = 233;
            this.paramSpec();
            this.state = 234;
            this.match(ArrobaParser.CURLY_L);
            this.state = 238;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ArrobaParser.ARR_FAT) | (1 << ArrobaParser.PAREN_L) | (1 << ArrobaParser.SQUARE_L) | (1 << ArrobaParser.IF))) !== 0) || ((((_la - 35)) & ~0x1f) == 0 && ((1 << (_la - 35)) & ((1 << (ArrobaParser.EXCLAMATION - 35)) | (1 << (ArrobaParser.FALSE - 35)) | (1 << (ArrobaParser.TRUE - 35)) | (1 << (ArrobaParser.AWAIT - 35)) | (1 << (ArrobaParser.BREAK - 35)) | (1 << (ArrobaParser.EXTERN - 35)) | (1 << (ArrobaParser.FN - 35)) | (1 << (ArrobaParser.LOCAL - 35)) | (1 << (ArrobaParser.RET - 35)) | (1 << (ArrobaParser.THROW - 35)) | (1 << (ArrobaParser.TRY - 35)) | (1 << (ArrobaParser.WHILE - 35)) | (1 << (ArrobaParser.DBL - 35)) | (1 << (ArrobaParser.HEX - 35)) | (1 << (ArrobaParser.INT - 35)) | (1 << (ArrobaParser.RAW_STRING - 35)) | (1 << (ArrobaParser.STRING - 35)) | (1 << (ArrobaParser.REGEX_LITERAL - 35)) | (1 << (ArrobaParser.ID - 35)))) !== 0)) {
                this.state = 235;
                this.stmt();
                this.state = 240;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 241;
            this.match(ArrobaParser.CURLY_R);
            break;

        case 11:
            localctx = new InlineFunctionExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 247;
            _la = this._input.LA(1);
            if(_la===ArrobaParser.FN) {
                this.state = 243;
                this.match(ArrobaParser.FN);
                this.state = 245;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
                if(la_===1) {
                    this.state = 244;
                    this.match(ArrobaParser.ID);

                }
            }

            this.state = 249;
            this.paramSpec();
            this.state = 250;
            this.match(ArrobaParser.ARR_FAT);
            this.state = 251;
            this.expr(4);
            break;

        case 12:
            localctx = new RegexLiteralExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 253;
            this.match(ArrobaParser.REGEX_LITERAL);
            break;

        case 13:
            localctx = new NestedExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 254;
            this.match(ArrobaParser.PAREN_L);
            this.state = 255;
            this.expr(0);
            this.state = 256;
            this.match(ArrobaParser.PAREN_R);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 295;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,30,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 293;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new MathExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, ArrobaParser.RULE_expr);
                    this.state = 260;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 261;
                    this.arithmeticOperator();
                    this.state = 262;
                    localctx.right = this.expr(13);
                    break;

                case 2:
                    localctx = new BoolExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, ArrobaParser.RULE_expr);
                    this.state = 264;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 265;
                    this.booleanOperator();
                    this.state = 266;
                    localctx.right = this.expr(12);
                    break;

                case 3:
                    localctx = new ArrowRightExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, ArrobaParser.RULE_expr);
                    this.state = 268;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 269;
                    this.match(ArrobaParser.ARR_R);
                    this.state = 270;
                    localctx.right = this.expr(4);
                    break;

                case 4:
                    localctx = new MemberExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ArrobaParser.RULE_expr);
                    this.state = 271;
                    if (!( this.precpred(this._ctx, 19))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 19)");
                    }
                    this.state = 272;
                    this.match(ArrobaParser.DOT);
                    this.state = 273;
                    this.match(ArrobaParser.ID);
                    break;

                case 5:
                    localctx = new InvocationExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    localctx.target = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, ArrobaParser.RULE_expr);
                    this.state = 274;
                    if (!( this.precpred(this._ctx, 13))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                    }
                    this.state = 275;
                    this.match(ArrobaParser.PAREN_L);
                    this.state = 285;
                    _la = this._input.LA(1);
                    if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ArrobaParser.ARR_FAT) | (1 << ArrobaParser.PAREN_L) | (1 << ArrobaParser.SQUARE_L))) !== 0) || ((((_la - 35)) & ~0x1f) == 0 && ((1 << (_la - 35)) & ((1 << (ArrobaParser.EXCLAMATION - 35)) | (1 << (ArrobaParser.FALSE - 35)) | (1 << (ArrobaParser.TRUE - 35)) | (1 << (ArrobaParser.AWAIT - 35)) | (1 << (ArrobaParser.FN - 35)) | (1 << (ArrobaParser.LOCAL - 35)) | (1 << (ArrobaParser.DBL - 35)) | (1 << (ArrobaParser.HEX - 35)) | (1 << (ArrobaParser.INT - 35)) | (1 << (ArrobaParser.RAW_STRING - 35)) | (1 << (ArrobaParser.STRING - 35)) | (1 << (ArrobaParser.REGEX_LITERAL - 35)) | (1 << (ArrobaParser.ID - 35)))) !== 0)) {
                        this.state = 281;
                        this._errHandler.sync(this);
                        var _alt = this._interp.adaptivePredict(this._input,27,this._ctx)
                        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                            if(_alt===1) {
                                this.state = 276;
                                localctx._expr = this.expr(0);
                                localctx.args.push(localctx._expr);
                                this.state = 277;
                                this.match(ArrobaParser.COMMA); 
                            }
                            this.state = 283;
                            this._errHandler.sync(this);
                            _alt = this._interp.adaptivePredict(this._input,27,this._ctx);
                        }

                        this.state = 284;
                        localctx._expr = this.expr(0);
                        localctx.args.push(localctx._expr);
                    }

                    this.state = 287;
                    this.match(ArrobaParser.PAREN_R);
                    break;

                case 6:
                    localctx = new IndexExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    localctx.target = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, ArrobaParser.RULE_expr);
                    this.state = 288;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 289;
                    this.match(ArrobaParser.SQUARE_L);
                    this.state = 290;
                    localctx.index = this.expr(0);
                    this.state = 291;
                    this.match(ArrobaParser.SQUARE_R);
                    break;

                } 
            }
            this.state = 297;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,30,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function ParamSpecContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ArrobaParser.RULE_paramSpec;
    return this;
}

ParamSpecContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParamSpecContext.prototype.constructor = ParamSpecContext;

ParamSpecContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ArrobaParser.ID);
    } else {
        return this.getToken(ArrobaParser.ID, i);
    }
};


ParamSpecContext.prototype.PAREN_L = function() {
    return this.getToken(ArrobaParser.PAREN_L, 0);
};

ParamSpecContext.prototype.PAREN_R = function() {
    return this.getToken(ArrobaParser.PAREN_R, 0);
};

ParamSpecContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ArrobaParser.COMMA);
    } else {
        return this.getToken(ArrobaParser.COMMA, i);
    }
};


ParamSpecContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.enterParamSpec(this);
	}
};

ParamSpecContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.exitParamSpec(this);
	}
};

ParamSpecContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ArrobaVisitor ) {
        return visitor.visitParamSpec(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ArrobaParser.ParamSpecContext = ParamSpecContext;

ArrobaParser.prototype.paramSpec = function() {

    var localctx = new ParamSpecContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, ArrobaParser.RULE_paramSpec);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 312;
        switch(this._input.LA(1)) {
        case ArrobaParser.PAREN_L:
            this.state = 298;
            this.match(ArrobaParser.PAREN_L);
            this.state = 307;
            _la = this._input.LA(1);
            if(_la===ArrobaParser.ID) {
                this.state = 303;
                this._errHandler.sync(this);
                var _alt = this._interp.adaptivePredict(this._input,31,this._ctx)
                while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                    if(_alt===1) {
                        this.state = 299;
                        this.match(ArrobaParser.ID);
                        this.state = 300;
                        this.match(ArrobaParser.COMMA); 
                    }
                    this.state = 305;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input,31,this._ctx);
                }

                this.state = 306;
                this.match(ArrobaParser.ID);
            }

            this.state = 309;
            this.match(ArrobaParser.PAREN_R);
            break;
        case ArrobaParser.ARR_FAT:
        case ArrobaParser.CURLY_L:
            break;
        case ArrobaParser.ID:
            this.state = 311;
            this.match(ArrobaParser.ID);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ArithmeticOperatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ArrobaParser.RULE_arithmeticOperator;
    return this;
}

ArithmeticOperatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArithmeticOperatorContext.prototype.constructor = ArithmeticOperatorContext;

ArithmeticOperatorContext.prototype.CARET = function() {
    return this.getToken(ArrobaParser.CARET, 0);
};

ArithmeticOperatorContext.prototype.MODULO = function() {
    return this.getToken(ArrobaParser.MODULO, 0);
};

ArithmeticOperatorContext.prototype.TIMES = function() {
    return this.getToken(ArrobaParser.TIMES, 0);
};

ArithmeticOperatorContext.prototype.DIVIDE = function() {
    return this.getToken(ArrobaParser.DIVIDE, 0);
};

ArithmeticOperatorContext.prototype.PLUS = function() {
    return this.getToken(ArrobaParser.PLUS, 0);
};

ArithmeticOperatorContext.prototype.MINUS = function() {
    return this.getToken(ArrobaParser.MINUS, 0);
};

ArithmeticOperatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.enterArithmeticOperator(this);
	}
};

ArithmeticOperatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.exitArithmeticOperator(this);
	}
};

ArithmeticOperatorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ArrobaVisitor ) {
        return visitor.visitArithmeticOperator(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ArrobaParser.ArithmeticOperatorContext = ArithmeticOperatorContext;

ArrobaParser.prototype.arithmeticOperator = function() {

    var localctx = new ArithmeticOperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, ArrobaParser.RULE_arithmeticOperator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 314;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ArrobaParser.CARET) | (1 << ArrobaParser.PLUS) | (1 << ArrobaParser.MINUS) | (1 << ArrobaParser.MODULO) | (1 << ArrobaParser.TIMES) | (1 << ArrobaParser.DIVIDE))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BooleanOperatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ArrobaParser.RULE_booleanOperator;
    return this;
}

BooleanOperatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BooleanOperatorContext.prototype.constructor = BooleanOperatorContext;

BooleanOperatorContext.prototype.LT = function() {
    return this.getToken(ArrobaParser.LT, 0);
};

BooleanOperatorContext.prototype.LTE = function() {
    return this.getToken(ArrobaParser.LTE, 0);
};

BooleanOperatorContext.prototype.GT = function() {
    return this.getToken(ArrobaParser.GT, 0);
};

BooleanOperatorContext.prototype.GTE = function() {
    return this.getToken(ArrobaParser.GTE, 0);
};

BooleanOperatorContext.prototype.IS = function() {
    return this.getToken(ArrobaParser.IS, 0);
};

BooleanOperatorContext.prototype.NOT = function() {
    return this.getToken(ArrobaParser.NOT, 0);
};

BooleanOperatorContext.prototype.AND = function() {
    return this.getToken(ArrobaParser.AND, 0);
};

BooleanOperatorContext.prototype.OR = function() {
    return this.getToken(ArrobaParser.OR, 0);
};

BooleanOperatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.enterBooleanOperator(this);
	}
};

BooleanOperatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArrobaListener ) {
        listener.exitBooleanOperator(this);
	}
};

BooleanOperatorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ArrobaVisitor ) {
        return visitor.visitBooleanOperator(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ArrobaParser.BooleanOperatorContext = BooleanOperatorContext;

ArrobaParser.prototype.booleanOperator = function() {

    var localctx = new BooleanOperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, ArrobaParser.RULE_booleanOperator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 316;
        _la = this._input.LA(1);
        if(!(((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (ArrobaParser.IS - 33)) | (1 << (ArrobaParser.NOT - 33)) | (1 << (ArrobaParser.AND - 33)) | (1 << (ArrobaParser.OR - 33)) | (1 << (ArrobaParser.LT - 33)) | (1 << (ArrobaParser.LTE - 33)) | (1 << (ArrobaParser.GT - 33)) | (1 << (ArrobaParser.GTE - 33)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


ArrobaParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 14:
			return this.expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

ArrobaParser.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 12);
		case 1:
			return this.precpred(this._ctx, 11);
		case 2:
			return this.precpred(this._ctx, 3);
		case 3:
			return this.precpred(this._ctx, 19);
		case 4:
			return this.precpred(this._ctx, 13);
		case 5:
			return this.precpred(this._ctx, 8);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.ArrobaParser = ArrobaParser;
