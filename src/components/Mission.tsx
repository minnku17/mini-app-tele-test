import { useState } from "react";

function Mission() {
  const [twitter, setTwitter] = useState<boolean>(false);
  const [telegram, setTelegram] = useState<boolean>(false);
  const [medium, setMedium] = useState<boolean>(false);
  const [instagram, setInstagram] = useState<boolean>(false);

  return (
    <div className="w-full flex flex-col items-start justify-start gap-2">
      <a
        href="twitter://user?screen_name=ravegamenft"
        target="_blank"
        className="w-full p-2 flex items-center justify-between bg-[#f3f4f6] hover:bg-[#d1d5dc] rounded-lg animate-showTop-08"
      >
        <div className="flex items-center justify-start gap-2">
          <img
            className="w-10 h-10"
            src="https://assets1.chainstoreage.com/styles/max_width_800/s3/2023-07/twitter-x-logo.png?itok=pekgiLf9"
          />
          <p className="text-[#6b7280] text-[14px] sm:text-[16px] ">
            Follow us on Twitter
          </p>
        </div>
        <button className="px-3 py-2 text-white text-[14px] rounded-lg bg-[#0184c7]">
          Complete
        </button>
      </a>
      <div className="w-full p-2 flex items-center justify-between bg-[#f3f4f6] hover:bg-[#d1d5dc] rounded-lg animate-showTop-09">
        <div className="flex items-center justify-start gap-2">
          <img
            className="w-10 h-10"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/512px-Telegram_logo.svg.png?20220101141644"
          />
          <p className="text-[#6b7280] text-[14px] sm:text-[16px] ">
            Join our Telegram group
          </p>
        </div>
        <button className="px-3 py-2 text-white text-[14px] rounded-lg bg-[#0184c7]">
          Complete
        </button>
      </div>
      <div className="w-full p-2 flex items-center justify-between bg-[#f3f4f6] hover:bg-[#d1d5dc] rounded-lg animate-showTop-1">
        <div className="flex items-center justify-start gap-2">
          <img
            className="w-10 h-10"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/512px-Telegram_logo.svg.png?20220101141644"
          />
          <p className="text-[#6b7280] text-[14px] sm:text-[16px] ">
            Join our Telegram group
          </p>
        </div>
        <button className="px-3 py-2 text-white text-[14px] rounded-lg bg-[#0184c7]">
          Complete
        </button>
      </div>
      <div className="w-full p-2 flex items-center justify-between bg-[#f3f4f6] hover:bg-[#d1d5dc] rounded-lg animate-showTop-1.1">
        <div className="flex items-center justify-start gap-2">
          <img
            className="w-10 h-10"
            src="https://cdn.iconscout.com/icon/free/png-256/free-medium-47-433328.png?f=webp"
          />
          <p className="text-[#6b7280] text-[14px] sm:text-[16px] ">
            Follow us on Medium
          </p>
        </div>
        <button className="px-3 py-2 text-white text-[14px] rounded-lg bg-[#0184c7]">
          Complete
        </button>
      </div>
      <div className="w-full p-2 flex items-center justify-between bg-[#f3f4f6] hover:bg-[#d1d5dc] rounded-lg animate-showTop-1.2">
        <div className="flex items-center justify-start gap-2">
          <img
            className="w-10 h-10"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/2048px-Instagram_logo_2022.svg.png"
          />
          <p className="text-[#6b7280] text-[14px] sm:text-[16px] ">
            Follow us on Instagram
          </p>
        </div>
        <button className="px-3 py-2 text-white text-[14px] rounded-lg bg-[#0184c7]">
          Complete
        </button>
      </div>
    </div>
  );
}

export default Mission;
