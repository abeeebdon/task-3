import { createContext, useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { db, app } from '../config'
const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [totalAmount, setTotalAmount] = useState(0)
  const [productId, setProductId] = useState()
  const submitData = async (formData) => {
    try {
      const docRef = await addDoc(collection(db, 'products'), formData)
      setProductId(docRef.id)
      console.log('Document written with ID: ', docRef.id)
    } catch (e) {
      console.error('Error adding document: ', e)
    }
  }

  return (
    <AppContext.Provider
      value={{
        cart,
        setCart,
        totalAmount,
        setTotalAmount,
        submitData,
        productId,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
