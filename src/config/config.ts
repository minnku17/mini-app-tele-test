/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { bsc, bscTestnet, opBNB } from "viem/chains";
import type { Address, Chain } from "viem";

const mainnetChains: Chain[] = [bsc, opBNB];
const testnetChains: Chain[] = [bscTestnet];

export const chainList: Chain[] = [
  ...mainnetChains,
  ...(process.env.NODE_ENV === "development" ? testnetChains : []),
];

const config: any = {
  chains: chainList,
  chainImages: chainList.reduce(
    (obj: any, item) => ({
      ...obj,
      [item.id.toString()]: `/assets/images/wallet/${item.id}.svg`,
    }),
    {}
  ),
  routers: {
    [bsc.id]: "0x10ED43C718714eb63d5aA57B78B54704E256024E",
    [opBNB.id]: "0x8cFe327CEc66d1C090Dd72bd0FF11d690C33a2Eb",
    [bscTestnet.id]: "0x9Ac64Cc6e4415144C455BD8E4837Fea55603e5c3",
  },
  walletConnectProjectId: "adf871b8f2ca358128c57af727e82cae", // REPLACE WITH YOUR WALLET CONNECT PROJECT ID
};

export default config;
