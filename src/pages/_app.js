import '../styles/globals.css'
import { Poppins } from 'next/font/google'
import Head from 'next/head'

import Nav from '../components/common/Nav'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export default function App({ Component, pageProps }) {
  return (
    <div className={`${poppins.variable}`}>
      <Head>
        <title>elev8x | Unleash the digital potential of your business</title>t
      </Head>
      <Nav />
      <Component {...pageProps} />
    </div>
  )
}
