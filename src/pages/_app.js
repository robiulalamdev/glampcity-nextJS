import AuthProvider from '@/ContextAPI/AuthProvider'
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
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from 'next/router'
import ErrorPage from './404'

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  const router = useRouter()

  if (router.isFallback) {
    return setLoading(true)
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  });


  return (
    <>
      {
        router.pathname === "/404" ? <ErrorPage statusCode={404} />
          :
          (
            <Provider store={store}>
              <AuthProvider>
                <TopNavber />
                <Navber />
                {
                  loading ? < SmallLoader /> : <Component {...pageProps} />
                }
                <Footer />

                <PremiumServiceBtn />
                <CartBtn />
              </AuthProvider>
            </Provider>
          )
      }
    </>
  )
}
