import { Routes, Route, useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import Headers from './components/Headers'
import Missing from './components/Missing'
import Products from './pages/Products'
import Checkout from './pages/Checkout'
import Cart from './pages/Cart'
import ProductDetails from './pages/ProductDetails'
import { useEffect } from 'react'
import Manager from './pages/Manager'

const App = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return (
    <section className="flex justify-center items-center">
      <div className="w-full mt-10 max-w-[1440px] py-4 px-0 md:px-4 lg:px-6 ">
        <Headers />
        <Routes>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/" element={<Products />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/manager" element={<Manager />} />
          <Route path="*" element={<Missing />} />
        </Routes>
        <Footer />
      </div>
    </section>
  )
}
export default App
