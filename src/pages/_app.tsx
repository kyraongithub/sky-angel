import Wrapper from "@/components/layout/wrapper";
import { GlobalContextProvider } from "@/context";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalContextProvider>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </GlobalContextProvider>
  );
}
