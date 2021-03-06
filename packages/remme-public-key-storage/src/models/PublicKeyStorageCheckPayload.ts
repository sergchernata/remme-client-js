import { forge } from "remme-utils";

export class PublicKeyStorageCheckPayload {
    public pub_key: forge.pki.PEM;
    public constructor(publicKeyPem: forge.pki.PEM) {
        this.pub_key = publicKeyPem;
    }
}
