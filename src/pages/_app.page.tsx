import { AppProps } from "next/app";
import Header from "../components/Header";
import { MyThemeProvider } from "../styles/themes/ThemeContext";
import GlobalStyles from '../styles/global'
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MyThemeProvider>
        <DefaultSeo {...SEO} />
        <Header />
        <Component {...pageProps} />
        <GlobalStyles />
      </MyThemeProvider>
    </>
  )
}

export default MyApp;