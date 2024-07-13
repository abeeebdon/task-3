import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Headers from './components/Headers'
import Missing from './components/Missing'
import Products from './pages/Products'
import Checkout from './pages/Checkout'
import Cart from './pages/Cart'
import HomePage from './pages/HomePage'
import ProductDetails from './pages/ProductDetails'

const App = () => {
  return (
    <section className="flex justify-center items-center">
      <div className="w-full max-w-[1440px] py-4 px-0 md:px-4 lg:px-6 ">
        <Headers />
        <Routes>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Missing />} />
        </Routes>
        <Footer />
      </div>
    </section>
  )
}
export default App
