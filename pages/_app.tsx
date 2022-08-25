import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-main-blue">
      <div className="container bg-main-blue flex justify-center items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
        <Component {...pageProps} />
      </div>
    </div>
  ) 
}

export default MyApp
