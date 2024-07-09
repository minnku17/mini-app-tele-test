import Countdown, { zeroPad } from "react-countdown";

function CountdownCo() {
  return (
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
                <p className="text-[20px] font-bold">{zeroPad(minutes)}</p>
                <p className="text-[12px] font-light">Minutes</p>
              </div>
              <div className="w-16 h-16 flex flex-col items-center justify-center p-3 text-white rounded-xl bg-[#0184c7] dark:text-secondary text-secondary-foreground">
                <p className="text-[20px] font-bold">{zeroPad(seconds)}</p>
                <p className="text-[12px] font-light">Seconds</p>
              </div>
            </div>
          );
        }}
      />
    </div>
  );
}

export default CountdownCo;
