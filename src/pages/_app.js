import Footer from '@/components/Shared/Footer/Footer'
import Navber from '@/components/Shared/Navber/Navber'
import TopNavber from '@/components/Shared/Navber/TopNavber'
import store from '@/store'
import '@/styles/globals.css'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <TopNavber />
        <Navber />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </>
  )
}
