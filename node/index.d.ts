import { Uish } from 'pollenium-uvaursi';
export declare class Forgetmenot {
    readonly dirPath: string;
    constructor(dirPath: string);
    private getPath;
    private getIsSet;
    set(struct: {
        key: string;
        value: Uish;
    }): Promise<void>;
}
