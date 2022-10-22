import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react';


function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setLoading(false)
    }
  }, [])

  return loading ? <div>
    <img className="loader" src='/images/morpho-logo.svg'/>
  </div> : <Component {...pageProps} />
  // return <Component {...pageProps} />
}

export default MyApp
