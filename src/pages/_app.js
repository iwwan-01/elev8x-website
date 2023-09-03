import '@/styles/globals.css'
import Nav from '../components/common/Nav'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  )
}
