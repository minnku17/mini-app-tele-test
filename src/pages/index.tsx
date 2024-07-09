import { Inter } from "next/font/google";
import CountdownCo from "@/components/CountdownCo";
import Description from "@/components/Description";
import Mission from "@/components/Mission";
import Claim from "@/components/Claim";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex w-full min-h-screen flex-col items-center justify-center bg-white p-2 sm:p-0 ${inter.className}`}
    >
      <div className="w-full sm:w-[574px] flex flex-col items-center justify-between border rounded-md border-[#e6e7eb] shadow-lg">
        <div className="w-full flex flex-col px-3 sm:px-[24px]">
          <div className="w-full py-[26px]  flex items-center justify-between ">
            <p className="text-[30px] font-semibold text-black">Giveaway</p>
            <button className="py-[9px] px-[16px] bg-[#3396ff] border border-[#2e87e6] rounded-3xl text-[16px] text-white animate-showTop">
              Connect Wallet
            </button>
          </div>
          <CountdownCo />
          <Description />
          <Mission />
          <Claim />
        </div>
        <div className="border-t border-[#e6e7eb] rounded-b-md bg-[#f3f4f6] py-[16px] w-full flex items-center justify-center gap-2">
          <p className="text-black">Powered by</p>
          <img
            className="h-[1.5rem] w-auto"
            src="https://www.pinky.finance/images/logo.svg"
          />
        </div>
      </div>
    </main>
  );
}
