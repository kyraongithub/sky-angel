import { ReactNode, createContext, useState } from "react";

interface IEnvContext {
  score: number;
  setScore: (e: number) => void;
}

export const GlobalContext = createContext<IEnvContext>({
  score: 0,
  setScore: () => {},
});

type Props = {
  children: ReactNode;
};

export const GlobalContextProvider = (props: Props) => {
  const [score, setScore] = useState<number>(0);

  return (
    <GlobalContext.Provider
      value={{
        score,
        setScore,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
