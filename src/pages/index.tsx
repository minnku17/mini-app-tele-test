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
          <div className="w-full flex flex-col items-start justify-start gap-2">
            <div className="w-full p-2 flex items-center justify-between bg-[#f3f4f6] rounded-lg">
              <div className="flex items-center justify-start gap-2">
                <img
                  className="w-10 h-10"
                  src="https://assets1.chainstoreage.com/styles/max_width_800/s3/2023-07/twitter-x-logo.png?itok=pekgiLf9"
                />
                <p className="text-[#6b7280] text-[16px] ">
                  Follow us on Twitter
                </p>
              </div>
              <button className="px-4 py-2 text-white text-[14px] rounded-lg bg-[#0184c7]">
                Complete
              </button>
            </div>
            <div className="w-full p-2 flex items-center justify-between bg-[#f3f4f6] rounded-lg">
              <div className="flex items-center justify-start gap-2">
                <img
                  className="w-10 h-10"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/512px-Telegram_logo.svg.png?20220101141644"
                />
                <p className="text-[#6b7280] text-[16px] ">
                  Join our Telegram group
                </p>
              </div>
              <button className="px-4 py-2 text-white text-[14px] rounded-lg bg-[#0184c7]">
                Complete
              </button>
            </div>
            <div className="w-full p-2 flex items-center justify-between bg-[#f3f4f6] rounded-lg">
              <div className="flex items-center justify-start gap-2">
                <img
                  className="w-10 h-10"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/512px-Telegram_logo.svg.png?20220101141644"
                />
                <p className="text-[#6b7280] text-[16px] ">
                  Join our Telegram group
                </p>
              </div>
              <button className="px-4 py-2 text-white text-[14px] rounded-lg bg-[#0184c7]">
                Complete
              </button>
            </div>
            <div className="w-full p-2 flex items-center justify-between bg-[#f3f4f6] rounded-lg">
              <div className="flex items-center justify-start gap-2">
                <img
                  className="w-10 h-10"
                  src="https://cdn.iconscout.com/icon/free/png-256/free-medium-47-433328.png?f=webp"
                />
                <p className="text-[#6b7280] text-[16px] ">
                  Follow us on Medium
                </p>
              </div>
              <button className="px-4 py-2 text-white text-[14px] rounded-lg bg-[#0184c7]">
                Complete
              </button>
            </div>
            <div className="w-full p-2 flex items-center justify-between bg-[#f3f4f6] rounded-lg">
              <div className="flex items-center justify-start gap-2">
                <img
                  className="w-10 h-10"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/2048px-Instagram_logo_2022.svg.png"
                />
                <p className="text-[#6b7280] text-[16px] ">
                  Follow us on Instagram
                </p>
              </div>
              <button className="px-4 py-2 text-white text-[14px] rounded-lg bg-[#0184c7]">
                Complete
              </button>
            </div>
          </div>
          <div className="pb-10 pt-4 w-full flex flex-col items-center justify-start">
            <p className="text-[18px] text-black font-semibold">
              Unlock 4 More Entries
            </p>
            <p className="mt-1 text-[14px] text-[#6b7280]">
              Complete the above entries to unlock the rest!
            </p>
            <button className="mt-4 w-[192px] h-[40px] rounded-lg px-5 py-2 text-white bg-[#9ca3af]">
              Claim
            </button>
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
