import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="container flex justify-center items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
      <Component {...pageProps} />
    </div>
  ) 
}

export default MyApp
