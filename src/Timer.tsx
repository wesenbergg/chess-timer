import { CSSProperties, useEffect } from "react";
import { Player, useGameStore } from "./store";
import clsx from "clsx";

const Timer = ({ index }: { index: number }) => {
  const player = useGameStore((state) => state.game[index]);
  const toggleTurn = useGameStore((state) => state.toggleTurn);
  const tick = useGameStore((state) => state.tick);
  const { ttl: seconds, isActive } = player as Player;

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (seconds > 0 && isActive) {
        tick(index);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [seconds, isActive]);

  return (
    <>
      <button
        aria-disabled={!isActive}
        onClick={isActive ? toggleTurn : undefined}
        className={clsx(
          "timer",
          "w-96 h-96 grid grid-flow-col gap-12 content-evenly mx-auto px-24",
          "rounded-lg shadow-xl text-white",
          {
            "bg-purple-700 hover:bg-purple-800 focus:bg-purple-900": isActive,
            "bg-purple-300 text-white": !isActive,
          }
        )}
      >
        <div className="flex flex-col items-center">
          <span className="countdown font-mono text-5xl">
            <span
              style={{ "--value": Math.floor(seconds / 60) } as CSSProperties}
            />
          </span>
          min
        </div>
        <div className="flex flex-col items-center">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": seconds % 60 } as CSSProperties} />
          </span>
          sec
        </div>
      </button>
    </>
  );
};

export default Timer;
