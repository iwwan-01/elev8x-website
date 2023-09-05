import '@/styles/globals.css'
import Nav from '../components/common/Nav'
import Footer from '@/components/common/Footer'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
