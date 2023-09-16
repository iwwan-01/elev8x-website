import '@/styles/globals.css'
import { Poppins } from 'next/font/google'

import Nav from '../components/common/Nav'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-poppins',
})

export default function App({ Component, pageProps }) {
  return (
    <div className={`${poppins.variable}`}>
      <Nav />
      <Component {...pageProps} />
    </div>
  )
}
