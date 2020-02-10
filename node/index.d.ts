import { Uu, Uish } from 'pollenium-uvaursi';
export declare class Forgetmenot {
    readonly dirPath: string;
    constructor(dirPath: string);
    getPath(key: string): string;
    getIsSet(key: string): boolean;
    get(key: string): Uu | null;
    set(key: string, value: Uish): Promise<void>;
}
