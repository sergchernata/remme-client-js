export interface IRemmeAccount {
    publicKeyHex: string;
    privateKeyHex: string;
    privateKey: any;
    address: string;
    sign(transaction: Uint8Array | string): any;
}
