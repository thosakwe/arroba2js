import JSDatum from "../js/js-datum";

declare const ArrobaParser: any;

/**
 * A blast from the past! I mean... The interpreter.
 */
export default class ArrobaDatum {
    /**
     * The name of a JS variable assigned to this instance.
     */
    identifierName:string;
    
    /**
     * A dictionary of string keys and ArrobaDatum values that can be dynamically referenced.
     */
    members = new MemberDict();
    
    /**
     * Initializes the datum, with the given source element.
     */
    constructor(public source?) {
        this.addCriticalMembers();
    }
    
    /**
     * Can be overridden to auto-fill members into all instances of a given type.
     */
    protected addCriticalMembers(): void {

    }
    
    /**
     * Returns the actual value of this datum.
     * TL;DR: This is a getter.
     */
    getValue(): JSDatum {
        return new JSDatum();
    }
    
    /**
     * Attempts to find a member on this instance with the given name/dot path.
     */
    resolve(memberName: string) {
        const parts: string[] = memberName.split("\\.", 2);
        const resolved: ArrobaDatum = this.members[parts[0]];

        if (resolved != null) {
            if (parts.length > 1 && parts[1].length > 0) {
                return resolved.resolve(parts[1]);
            } else return resolved;
        }

        throw new Error(`Field ${memberName} does not exist on ${this.toString()}`);
    }

    /**
     * Attempts to set a member on this instance to a given value.
     */
    setMember(memberName: string, value: ArrobaDatum) {
    }

    toBool() {
        return false;
    }

    toString() {

    }
}

class MemberDict {
    private members = {};

    get = (key: string): ArrobaDatum => this.members[key];

    set(key: string, value: ArrobaDatum): void {
        this.members[key] = value;
    }
}