import { IRemmeAccount } from "./interface";
declare class RemmeAccount implements IRemmeAccount {
    [key: string]: any;
    private _signer;
    private _familyName;
    address: string;
    publicKeyHex: string;
    privateKeyHex: string;
    constructor(privateKeyHex?: string);
    readonly privateKey: any;
    sign(transaction: Uint8Array | string): any;
}
export { RemmeAccount, IRemmeAccount };
