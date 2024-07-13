import { createContext, useState } from 'react'

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [totalAmount, setTotalAmount] = useState(0)
  return (
    <AppContext.Provider value={{ cart, setCart, totalAmount, setTotalAmount }}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
