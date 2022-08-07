import type { AppProps } from "next/app";
import GlobalStyle from "../theme/globalStyle";
import { ThemeProvider } from "styled-components";
import theme from "../theme/theme";
import { GetStaticProps } from "next";
import { STARPI_API_URL } from "../config/Config";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
