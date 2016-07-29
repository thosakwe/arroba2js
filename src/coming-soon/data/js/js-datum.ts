/**
 * Represents a value that can be represented as JavaScript.
 */
export default class JSDatum {
    constructor(public spec?:JSDatumSpec) {
    }
    
    /**
     * Turns the datum into JavaScript. Wow!
     */
    toJS(): string {
        return "undefined";
    }

    toString(): string {
        return "<JSDatum>";
    }
}

interface JSDatumSpec {
    rawJs?:string;
    sourceMap:any;
}