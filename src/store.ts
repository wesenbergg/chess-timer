import { create } from "zustand";
import { produce } from "immer";

export type Player = {
  name: string;
  ttl: number;
  isActive: boolean;
};

type GameState = {
  turn: number;
  isGamePaused: boolean;
  game: Player[];
  start: () => void;
  pause: () => void;
  restart: () => void;
  toggleTurn: () => void;
  tick: (index: number) => void;
  setTimer: (time: number, handicap: number, player: string) => void;
};

const initGame = [
  { name: "white", ttl: 123, isActive: false },
  { name: "black", ttl: 123, isActive: false },
] as Player[];

const useGameStore = create<GameState>((set) => ({
  turn: 0,
  isGamePaused: true,
  game: initGame,
  start: () =>
    set(
      produce((state: GameState) => {
        state.game.forEach(
          (p: Player, i: number) => (p.isActive = state.turn % 2 === i)
        );
        state.isGamePaused = false;
      })
    ),
  pause: () =>
    set(
      produce((state: GameState) => {
        state.game.forEach((p: Player) => (p.isActive = false));
        state.isGamePaused = true;
      })
    ),
  restart: () =>
    set(
      produce((state) => {
        state.game = initGame;
        state.turn = 0;
      })
    ),
  toggleTurn: () => {
    set((state: GameState) => ({
      game: state.game.map((p: Player, i: number) => ({
        ...p,
        isActive: (state.turn + 1) % 2 === i,
      })),
      turn: ++state.turn,
    }));
  },
  tick: (index: number) =>
    set(
      produce((state) => {
        --state.game[index].ttl;
      })
    ),
  setTimer: (time: number, handicap: number, player: string) => {
    set((state: GameState) => ({
      game: state.game.map((p: Player) => ({
        ...p,
        ttl: p.name === player ? (time - handicap) * 60 : time * 60,
      })),
    }));
  },
}));

export { useGameStore };
