import type { ReactNode } from "react";

import { ThemeProvider } from "./ThemeProvider";

type Props = {
  children: ReactNode;
};

const Context = ({ children }: Props) => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {children}
    </ThemeProvider>
  );
};

export default Context;
