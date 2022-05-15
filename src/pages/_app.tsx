import "../styles/globals.css";
import type { AppProps } from "next/app";
import { LayoutComponent } from "../components/layout.component";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutComponent>
      <Component {...pageProps} />
    </LayoutComponent>
  );
}

export default MyApp;
