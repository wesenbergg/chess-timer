import clsx from "clsx";

import Timer from "./Timer";
import { useGameStore } from "./store";
import { SettingsDrawer } from "./SettingsDrawer";
import { PauseIcon, PlayIcon, StopIcon } from "@heroicons/react/16/solid";

function App() {
  const isGamePaused = useGameStore((state) => state.isGamePaused);
  const start = useGameStore((state) => state.start);
  const pause = useGameStore((state) => state.pause);
  const restart = useGameStore((state) => state.restart);

  return (
    <>
      <Timer index={0} />
      <div className="flex flex-row justify-center space-x-4">
        <button
          onClick={start}
          disabled={!isGamePaused}
          className={clsx(
            "p-2 disabled:bg-neutral-50 rounded-full bg-purple-500 text-sm font-bold",
            {
              "hover:shadow-md hover:-translate-y-1 transform transition duration-200":
                isGamePaused,
            }
          )}
        >
          <PlayIcon className="text-white w-5 h-5" />
        </button>
        <button
          onClick={pause}
          disabled={isGamePaused}
          className={clsx("p-2 rounded-full bg-purple-500 text-sm", {
            "hover:shadow-md hover:-translate-y-1 transform transition duration-200":
              !isGamePaused,
          })}
        >
          <PauseIcon className="text-white w-5 h-5" />
        </button>
        <button
          onClick={restart}
          className="p-2 rounded-full bg-purple-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
        >
          <StopIcon className="text-white w-5 h-5" />
        </button>
        <SettingsDrawer />
      </div>
      <Timer index={1} />
    </>
  );
}

export default App;
