import config from "@/config/config";
import "@/styles/globals.css";
import NoSsr from "@/utils/NoSsr";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import type { AppProps } from "next/app";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const projectId = config.walletConnectProjectId;
const { publicClient } = configureChains(config.chains, [
  w3mProvider({ projectId }),
]);

export default function App({ Component, pageProps }: AppProps) {
  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: w3mConnectors({ projectId, chains: config.chains }),
    publicClient,
  });
  const ethereumClient = new EthereumClient(wagmiConfig, config.chains);
  return (
    <NoSsr>
      <WagmiConfig config={wagmiConfig}>
        <Component {...pageProps} />
      </WagmiConfig>
      <Web3Modal
        projectId={config.walletConnectProjectId}
        ethereumClient={ethereumClient}
        defaultChain={config.chains[0]}
      />
      <ToastContainer />
    </NoSsr>
  );
}
