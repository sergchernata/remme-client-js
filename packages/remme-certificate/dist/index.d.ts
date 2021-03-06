import { forge } from "remme-utils";
import { IBaseTransactionResponse } from "remme-transaction-service";
import { IRemmePublicKeyStorage, PublicKeyStorageCheckResult } from "remme-public-key-storage";
import { IRemmeCertificate } from "./interface";
import { ICertificateTransactionResponse, CertificateCreateDto } from "./models";
declare class RemmeCertificate implements IRemmeCertificate {
    private readonly _remmePublicKeyStorage;
    private readonly _rsaKeySize;
    constructor(remmePublicKeyStorage: IRemmePublicKeyStorage);
    createAndStore(certificateDataToCreate: CertificateCreateDto): Promise<ICertificateTransactionResponse>;
    store(certificate: forge.pki.Certificate | forge.pki.PEM): Promise<IBaseTransactionResponse>;
    check(certificate: forge.pki.Certificate | forge.pki.PEM): Promise<PublicKeyStorageCheckResult>;
    revoke(certificate: forge.pki.Certificate | forge.pki.PEM): Promise<IBaseTransactionResponse>;
    private _createCertificate(keys, certificateDataToCreate);
    private _createSubject(certificateDataToCreate);
    private _generateKeyPair();
    private _getPublicKeyPEM(certificate);
    private _getCertificatePEM(certificate);
    private _getCertificateFromPEM(certificate);
}
export { RemmeCertificate, IRemmeCertificate };
