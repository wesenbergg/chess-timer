import Timer from "./Timer";
import { useGameStore } from "./store";
import { SettingsDrawer } from "./SettingsDrawer";
import { PauseIcon, PlayIcon, StopIcon } from "@heroicons/react/16/solid";
import styles from "./styles";

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
          disabled={!isGamePaused}
          onClick={start}
          className={styles.iconButton}
        >
          <PlayIcon className="text-white w-5 h-5" />
        </button>
        <button
          onClick={pause}
          disabled={isGamePaused}
          className={styles.iconButton}
        >
          <PauseIcon className="text-white w-5 h-5" />
        </button>
        <button onClick={restart} className={styles.iconButton}>
          <StopIcon className="text-white w-5 h-5" />
        </button>
        <SettingsDrawer />
      </div>
      <Timer index={1} />
    </>
  );
}

export default App;
