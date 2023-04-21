import { useAuth } from '@/Hooks/getAuth'
import CartBtn from '@/components/Buttons/StickyButtons/CartBtn'
import PremiumServiceBtn from '@/components/Buttons/StickyButtons/PremiumServiceBtn'
import SmallLoader from '@/components/Loaders/SmallLoader'
import Footer from '@/components/Shared/Footer/Footer'
import Navber from '@/components/Shared/Navber/Navber'
import TopNavber from '@/components/Shared/Navber/TopNavber'
import store from '@/store'
import '@/styles/globals.css'
import { useEffect, useState } from 'react'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }) {
  const userInfo = useAuth()
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });


  return (
    <>
      <Provider store={store}>
        <TopNavber />
        <Navber />
        {
          loading && !userInfo?._id ? < SmallLoader /> : <Component {...pageProps} />
        }
        <Footer />

        <PremiumServiceBtn />
        <CartBtn />
      </Provider>
    </>
  )
}
