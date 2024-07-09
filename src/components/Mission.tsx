interface propsType {
  twitter: boolean;
  setTwitter: (value: boolean) => void;
  telegram: boolean;
  setTelegram: (value: boolean) => void;
  medium: boolean;
  setMedium: (value: boolean) => void;
  instagram: boolean;
  setInstagram: (value: boolean) => void;
}

function Mission({
  twitter,
  setTwitter,
  telegram,
  setTelegram,
  medium,
  setMedium,
  instagram,
  setInstagram,
}: propsType) {
  return (
    <div className="w-full flex flex-col items-start justify-start gap-2">
      <a
        href="https://x.com/Catsale_system"
        target="_blank"
        onClick={() => {
          setTwitter(true);
        }}
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
        <button
          className={` py-2 text-white text-[14px] rounded-lg ${
            twitter
              ? "px-4 bg-[#17a34a]"
              : "px-3 bg-[#0184c7] hover:bg-[#34657e]"
          } transition ease-in-out hover:scale-105`}
        >
          {twitter ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-check mx-auto"
            >
              <path d="M20 6 9 17l-5-5"></path>
            </svg>
          ) : (
            <p>Complete</p>
          )}
        </button>
      </a>

      <a
        href="https://t.me/web3codez"
        target="_blank"
        onClick={() => {
          setTelegram(true);
        }}
        className="w-full p-2 flex items-center justify-between bg-[#f3f4f6] hover:bg-[#d1d5dc] rounded-lg animate-showTop-08"
      >
        <div className="flex items-center justify-start gap-2">
          <img
            className="w-10 h-10"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/512px-Telegram_logo.svg.png?20220101141644"
          />
          <p className="text-[#6b7280] text-[14px] sm:text-[16px] ">
            Join our Telegram group
          </p>
        </div>
        <button
          className={` py-2 text-white text-[14px] rounded-lg ${
            telegram
              ? "px-4 bg-[#17a34a]"
              : "px-3 bg-[#0184c7] hover:bg-[#34657e]"
          } transition ease-in-out hover:scale-105`}
        >
          {telegram ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-check mx-auto"
            >
              <path d="M20 6 9 17l-5-5"></path>
            </svg>
          ) : (
            <p>Complete</p>
          )}
        </button>
      </a>

      <a
        href="https://medium.com/"
        target="_blank"
        onClick={() => {
          setMedium(true);
        }}
        className="w-full p-2 flex items-center justify-between bg-[#f3f4f6] hover:bg-[#d1d5dc] rounded-lg animate-showTop-08"
      >
        <div className="flex items-center justify-start gap-2">
          <img
            className="w-10 h-10"
            src="https://cdn.iconscout.com/icon/free/png-256/free-medium-47-433328.png?f=webp"
          />
          <p className="text-[#6b7280] text-[14px] sm:text-[16px] ">
            Follow us on Medium
          </p>
        </div>
        <button
          className={` py-2 text-white text-[14px] rounded-lg ${
            medium
              ? "px-4 bg-[#17a34a]"
              : "px-3 bg-[#0184c7] hover:bg-[#34657e]"
          } transition ease-in-out hover:scale-105`}
        >
          {medium ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-check mx-auto"
            >
              <path d="M20 6 9 17l-5-5"></path>
            </svg>
          ) : (
            <p>Complete</p>
          )}
        </button>
      </a>

      <a
        href="https://www.instagram.com/"
        target="_blank"
        onClick={() => {
          setInstagram(true);
        }}
        className="w-full p-2 flex items-center justify-between bg-[#f3f4f6] hover:bg-[#d1d5dc] rounded-lg animate-showTop-08"
      >
        <div className="flex items-center justify-start gap-2">
          <img
            className="w-10 h-10"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/2048px-Instagram_logo_2022.svg.png"
          />
          <p className="text-[#6b7280] text-[14px] sm:text-[16px] ">
            Follow us on Instagram
          </p>
        </div>
        <button
          className={` py-2 text-white text-[14px] rounded-lg ${
            instagram
              ? "px-4 bg-[#17a34a]"
              : "px-3 bg-[#0184c7] hover:bg-[#34657e]"
          } transition ease-in-out hover:scale-105`}
        >
          {instagram ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-check mx-auto"
            >
              <path d="M20 6 9 17l-5-5"></path>
            </svg>
          ) : (
            <p>Complete</p>
          )}
        </button>
      </a>
    </div>
  );
}

export default Mission;
