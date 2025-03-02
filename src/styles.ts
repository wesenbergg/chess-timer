const className = {
  option:
    "font-mono block text-lg text-black/60 py-4 px-6 border border-neutral-200 rounded shadow active:scale-95 transition hover:bg-white/60 active:bg-white/60",
  button:
    "px-4 py-2 rounded-full border outline-offset-2 border-purple-300 bg-purple-500 text-white font-bold text-sm hover:bg-purple-400 active:bg-purple-600 active:scale-x-95 transform transition hover:shadow-md",
  textButton:
    "px-4 py-2 outline-offset-2 text-purple-500 font-bold text-sm hover:text-purple-400 hover:scale-[1.02] active:text-purple-600 transform transition",
  iconButton:
    "p-2 rounded-full bg-purple-500 disabled:opacity-70 text-sm disabled:cursor-not-allowed hover:enabled:bg-purple-400 active:enabled:bg-purple-600 active:enabled:scale-90 transform transition hover:shadow-md",
};

export default { ...className };
