import { useAccount, useNetwork, useSwitchNetwork } from "wagmi";

import { useWeb3Modal } from "@web3modal/react";
import React, { useEffect } from "react";
import config from "@/config/config";
import { WalletIcon } from "lucide-react";

export default function WalletConnect({
  children,
}: {
  children?: any;
}): React.JSX.Element {
  const { open } = useWeb3Modal();
  const { chain } = useNetwork();
  const { isConnected, address } = useAccount();
  const { switchNetwork } = useSwitchNetwork();

  useEffect(() => {
    if (chain?.unsupported ?? false) {
      switchNetwork?.(config.chains[0].id);
    }
  }, [chain]);

  return isConnected ? (
    children || (
      <button
        className="py-[9px] px-[16px] flex items-center justify-center gap-1 bg-[#3396ff] border border-[#2e87e6] rounded-3xl text-[16px] text-white transition-opacity ease-in-out hover:!opacity-80 animate-showTop"
        onClick={open}
      >
        <WalletIcon className="w-6 h-6 text-[#fff]" />
        <p className="hidden font-semibold text-[#fff] lg:inline">
          {address?.slice(0, 6)}...{address?.slice(-4)}
        </p>
      </button>
    )
  ) : (
    <button
      onClick={open}
      className="py-[9px] px-[16px] bg-[#3396ff] border border-[#2e87e6] rounded-3xl text-[16px] text-white transition-opacity ease-in-out hover:!opacity-80 animate-showTop"
    >
      Connect Wallet
    </button>
  );
}
