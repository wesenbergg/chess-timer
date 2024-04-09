import clsx from "clsx";

import Timer from "./Timer";
import { useGameStore } from "./store";

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
            "px-4 py-2 disabled:bg-slate-50 rounded border border-purple-300 bg-purple-100 text-purple-500 text-sm",
            {
              "hover:shadow-md hover:-translate-y-1 transform transition duration-200":
                isGamePaused,
            }
          )}
        >
          start
        </button>
        <button
          onClick={pause}
          disabled={isGamePaused}
          className={clsx(
            "px-4 py-2 disabled:bg-slate-50 rounded border border-purple-300 bg-purple-100 text-purple-500 text-sm",
            {
              "hover:shadow-md hover:-translate-y-1 transform transition duration-200":
                !isGamePaused,
            }
          )}
        >
          pause
        </button>
        <button
          onClick={restart}
          className="px-4 py-2 rounded-md border border-purple-300 bg-purple-100 text-purple-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
        >
          restart
        </button>
      </div>
      <Timer index={1} />
    </>
  );
}

export default App;
