"use client";

import { Drawer } from "vaul";
import styles from "./styles";
import clsx from "clsx";
import { useGameStore } from "./store";
import { Cog6ToothIcon, PlusIcon } from "@heroicons/react/16/solid";
import { Fragment } from "react/jsx-runtime";

const timePreset = [5, 10, 15, 30];
const players = ["white", "black"];
const alignments = ["left", "none", "right"];

export function SettingsDrawer() {
  const setTimer = useGameStore((state) => state.setTimer);
  return (
    <Drawer.Root shouldScaleBackground>
      <Drawer.Trigger asChild>
        <button name="settings" className={styles.iconButton}>
          <Cog6ToothIcon className="text-white w-5 h-5" />
        </button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-neutral-100 p-4 flex flex-col rounded-t-xl h-[90%] mt-24 fixed bottom-0 left-0 right-0">
          <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
          <Drawer.Title className="font-bold mb-4">Timer settings</Drawer.Title>
          <form
            action={(fd) => {
              const time = fd.get("time") as unknown as number;
              const handicap = fd.get("handicap") as unknown as number;
              const player = fd.get("player") as unknown as string;

              setTimer(time, handicap, player);
            }}
            className="space-y-6"
          >
            <fieldset>
              <legend className="block mb-2">Minutes per player</legend>
              <div className="inline-flex space-x-2 mb-2">
                {timePreset.map((time) => (
                  <Fragment key={`time${time}`}>
                    <input
                      type="radio"
                      name="time"
                      id={`time${time}`}
                      value={time}
                      defaultChecked={time === 10}
                      className="radio-option sr-only"
                    />
                    <label htmlFor={`time${time}`} className={styles.option}>
                      {time}
                    </label>
                  </Fragment>
                ))}
              </div>
              <details className="transition">
                <summary className={clsx(styles.textButton, "inline")}>
                  <PlusIcon className="w-4 mr-1 inline-block text-center transition duration-500" />
                  Setup timer manually
                </summary>
                {/* TODO: Find way to animate details */}
              </details>
            </fieldset>
            <div>
              <label
                htmlFor="handicap"
                className="block mb-2 after:content-['_(minutes)'] after:text-black/40"
              >
                Handicap
              </label>
              <input
                id="handicap"
                name="handicap"
                type="number"
                className="rounded p-2 mb-2 font-mono w-24 ml-2"
              />
              <div className="flex space-x-2">
                {players.map((player) => (
                  <Fragment key={`player${player}`}>
                    <input
                      type="radio"
                      name="player"
                      id={`player${player}`}
                      value={player}
                      defaultChecked={player === "black"}
                      className="radio-option sr-only"
                    />
                    <label
                      htmlFor={`player${player}`}
                      className={styles.option}
                    >
                      {player}
                    </label>
                  </Fragment>
                ))}
              </div>
            </div>
            <fieldset>
              <legend className="block mb-2">Clock alignment</legend>
              <div className="inline-flex space-x-2">
                {alignments.map((align) => (
                  <Fragment key={`align${align}`}>
                    <input
                      type="radio"
                      name="align"
                      id={`align${align}`}
                      value={align}
                      defaultChecked={align === "none"}
                      className="radio-option sr-only"
                    />
                    <label htmlFor={`align${align}`} className={styles.option}>
                      {align}
                    </label>
                  </Fragment>
                ))}
              </div>
            </fieldset>
            <Drawer.Close asChild>
              <button
                type="submit"
                className={clsx(
                  styles.button,
                  "absolute bottom-4 right-0 left-0 mx-2"
                )}
              >
                Apply
              </button>
            </Drawer.Close>
          </form>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
