declare module "bitcoind-rpc" {
  export type Config = {
    protocol: string;
    user: string;
    host: string;
    port: string;
    pass: string;
  };

  export default class RpcClient {
    constructor(config: Config);
    getRawMemPool(err: Error, ret: { result: any[] }): void;

    batch(
      batchCall: () => void,
      callback: (err: Error, rawtxs: { result: string }[]) => void
    ): void;

    getRawTransaction(
      tx: string,
      callback: (err: Error, transaction: { result: string }) => string
    ): void;
  }
}
