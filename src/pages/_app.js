import CartBtn from '@/components/Buttons/StickyButtons/CartBtn'
import PremiumServiceBtn from '@/components/Buttons/StickyButtons/PremiumServiceBtn'
import SmallLoader from '@/components/Loaders/SmallLoader'
import Footer from '@/components/Shared/Footer/Footer'
import Navber from '@/components/Shared/Navber/Navber'
import TopNavber from '@/components/Shared/Navber/TopNavber'
import store from '@/store'
import '@/styles/globals.css'
import { ThemeProvider } from '@material-tailwind/react'
import { useEffect, useState } from 'react'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }) {
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
        <ThemeProvider>
          <TopNavber />
          <Navber />
          {
            loading ? <SmallLoader /> : <Component {...pageProps} />
          }
          <Footer />

          <PremiumServiceBtn />
          <CartBtn />
        </ThemeProvider>
      </Provider>
    </>
  )
}
