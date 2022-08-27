import { AppProps } from "next/app";
import Header from "../components/Header";
import { MyThemeProvider } from "../styles/themes/ThemeContext";
import GlobalStyles from '../styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MyThemeProvider>
        <Header />
        <Component {...pageProps} />
        <GlobalStyles />
      </MyThemeProvider>
    </>
  )
}

export default MyApp;
