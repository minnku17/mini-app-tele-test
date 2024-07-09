import Image from "next/image";
import { Inter } from "next/font/google";
import Countdown, { zeroPad } from "react-countdown";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex w-full min-h-screen flex-col items-center justify-center bg-white p-2 sm:p-0 ${inter.className}`}
    >
      <div className="w-full sm:w-[574px] flex flex-col items-center justify-between border rounded-md border-[#e6e7eb] shadow-lg">
        <div className="w-full flex flex-col px-[24px]">
          <div className="w-full py-[26px]  flex items-center justify-between ">
            <p className="text-[30px] font-semibold text-black">Giveaway</p>
            <button className="py-[9px] px-[16px] bg-[#3396ff] border border-[#2e87e6] rounded-3xl text-[16px] text-white">
              Connect Wallet
            </button>
          </div>
          <div className="w-full px-[24px] flex items-center justify-center">
            <Countdown
              date={Date.now() + 24 * 60 * 60 * 1000 + 3 * 60 * 60 * 1000}
              renderer={({ days, hours, minutes, seconds }) => {
                return (
                  <div className="flex items-center justify-center gap-4 text-black">
                    <div className="w-16 h-16 flex flex-col items-center justify-center p-3 text-white rounded-xl bg-[#0184c7] dark:text-secondary text-secondary-foreground">
                      <p className="text-[20px] font-bold">{zeroPad(days)}</p>
                      <p className="text-[12px] font-light">Days</p>
                    </div>
                    <div className="w-16 h-16 flex flex-col items-center justify-center p-3 text-white rounded-xl bg-[#0184c7] dark:text-secondary text-secondary-foreground">
                      <p className="text-[20px] font-bold">{zeroPad(hours)}</p>
                      <p className="text-[12px] font-light">Hours</p>
                    </div>
                    <div className="w-16 h-16 flex flex-col items-center justify-center p-3 text-white rounded-xl bg-[#0184c7] dark:text-secondary text-secondary-foreground">
                      <p className="text-[20px] font-bold">
                        {zeroPad(minutes)}
                      </p>
                      <p className="text-[12px] font-light">Minutes</p>
                    </div>
                    <div className="w-16 h-16 flex flex-col items-center justify-center p-3 text-white rounded-xl bg-[#0184c7] dark:text-secondary text-secondary-foreground">
                      <p className="text-[20px] font-bold">
                        {zeroPad(seconds)}
                      </p>
                      <p className="text-[12px] font-light">Seconds</p>
                    </div>
                  </div>
                );
              }}
            />
          </div>
          <div className="w-full py-[16px] flex flex-col gap-3 items-center justify-between">
            <p className="text-[18px] font-semibold text-black text-center">
              Bitcoin $30,000 Airdrop
            </p>
            <p className="text-[14px] text-[#6b7280] text-center">
              Bitcoin on BSC $30,000 Airdrop Is Now Live🚨
            </p>
            <p className="text-[14px] text-[#6b7280] text-center">
              Follow the steps below to enter for the chance to win one of 10 x
              $3,000 of $BTCBNB! 🎉⬇️
            </p>
          </div>
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
