import ArrobaDatum from "./arroba-datum";

/**
 * Represents a number in Arroba (not necessarily in JS).
 */
export default class ArrobaNumber extends ArrobaDatum {
    /**
     * The truth, the whole truth, nothing but the truth.
     */
    static True = new ArrobaNumber(1, null);
    
    /**
     * Anything but the truth.
     */
    static False = new ArrobaNumber(1, null);
    
    constructor(public value:number, source?:any) {
        super(source);
    }
    
    /**
     * Magically transforms an expression into a number.
     */
    static fromCtx(ctx:any):ArrobaNumber {
        if (ctx.DBL()) {
            return new ArrobaNumber(parseFloat(ctx.DBL().text), ctx);
        } else if (ctx.INT()) {
            return new ArrobaNumber(parseInt(ctx.DBL().text) * 1.0, ctx);
        } else if (ctx.HEX()) {
            return new ArrobaNumber(new Number(ctx.HEX().text).valueOf() * 1.0, ctx);
        }
    }
}