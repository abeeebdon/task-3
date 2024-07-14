import { useContext, useState } from 'react'
import useWindowSize from '../hooks/useWindowSize'
import { CartIcon, MenuIcon, SearchIcon, UserIcon } from './Icons'
import { NavLink, useNavigate } from 'react-router-dom'
import Cart from '../pages/Cart'
import { AppContext } from '../context/AppContext'

const Headers = () => {
  const { width } = useWindowSize()
  const [showNav, setShowNav] = useState(false)
  const { cart } = useContext(AppContext)
  const navigate = useNavigate()
  const activeState = ({ isActive }) => {
    return isActive ? { color: '#D19A64' } : {}
  }
  return (
    <div className="flex justify-center fixed top-0 inset-0 z-20 bg-white h-fit">
      <div className="w-full max-w-[1440px] mx-auto">
        <header className="flex justify-between p-4 items-center ">
          <h2 className="rubik text-[40px] text-[#F48C06] leading-[47.4px] pr-4">
            LASOM
          </h2>
          <article className="flex justify-between gap-4  items-center">
            {width > 768 && (
              <div className="flex justify-between gap-8 lg:gap-10 md:text-[20px] lg:text-[28px] leading-[37.4px]  pt-serif-regular">
                <NavLink to="/" style={activeState}>
                  Home
                </NavLink>
                <NavLink to="/cart" style={activeState}>
                  My cart
                </NavLink>
                <NavLink to="/checkout" style={activeState}>
                  Checkout
                </NavLink>
              </div>
            )}
          </article>
          <div className="flex gap-4 text-[5rem] items-center justify-end">
            <div className="flex gap-2 items-center lg:gap-4">
              <UserIcon />
              <SearchIcon />
              <div className="relative p-1" onClick={() => navigate('/cart')}>
                <CartIcon />
                {cart.length > 0 && (
                  <span className="absolute text-[10px] right-0 top-0 color-1  rounded-full bg-[#F8F8F8] ">
                    {cart.length}
                  </span>
                )}
              </div>
            </div>
            {width > 476 && (
              <button className="border h-[51px] p-3 border-[#D19A64] py-2 w-full max-w-[183px] text-[1rem] lg:text-[28px] leading-[37.1px] pt-serif-regular">
                Contact us
              </button>
            )}
            {width < 768 && (
              <div onClick={() => setShowNav(!showNav)}>
                <MenuIcon />
              </div>
            )}
          </div>
        </header>
        {showNav && width < 768 && (
          <div className="fixed right-0 w-[20vh] top-[15%] z-20 text-black bg-white  h-[50%] p-4">
            <div
              className="flex flex-col justify-between gap-6"
              onClick={() => setShowNav(false)}
            >
              <NavLink to="/" style={activeState}>
                Home
              </NavLink>
              <NavLink to="/cart" style={activeState}>
                My cart
              </NavLink>
              <NavLink to="/checkout" style={activeState}>
                Checkout
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Headers
