import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  //<Navigation /> Buttons on top of Page
  return <Component {...pageProps} />
}

export default MyApp
