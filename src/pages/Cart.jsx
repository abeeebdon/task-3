import { useNavigate } from 'react-router-dom'
import { DeleteIcon } from '../components/Icons'
import MenuHeading from '../components/MenuHeading'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'

const Cart = () => {
  const navigate = useNavigate()
  const { cart, setCart, totalAmount, setTotalAmount } = useContext(AppContext)
  const [result, setResult] = useState(1) // Initialize result state with a default value
  const handleIncrease = ({ id, amount }) => {
    if (amount < 5) {
      const newAmount = amount + 1
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === id ? { ...item, amount: newAmount } : item
        )
      )
    } else {
      setCart((prevCart) =>
        prevCart.map((item) => (item.id === id ? { ...item, amount: 1 } : item))
      )
    }
  }

  const handleDecrease = ({ id, amount }) => {
    if (amount == 1) {
      setCart((prevCart) =>
        prevCart.map((item) => (item.id === id ? { ...item, amount: 1 } : item))
      )
    } else {
      const newAmount = amount - 1
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === id ? { ...item, amount: newAmount } : item
        )
      )
    }
  }
  const handleDelete = (id) => {
    const newCart = cart.filter((data) => data.id != id)
    setCart(newCart)
  }

  useEffect(() => {
    let total = 0
    cart.forEach((item) => {
      total += item.price * item.amount
    })
    setTotalAmount(total)
  }, [cart])
  return (
    <section>
      <MenuHeading location="Cart" route="/products" />
      <article className="flex justify-between flex-col md:flex-row gap-[7%]">
        <div>
          <div className="p-text pt-serif-bold grid grid-cols-4 w-full max-w-[700px] gap-6">
            <h3 className="col-span-2">Product</h3>
            <h3 className="col-span-1">Price</h3>
            <h3 className="col-span-1">Quantity</h3>
          </div>
          <hr />

          {cart.length > 0 ? (
            cart.map((data, index) => {
              const { imageUrl, name, id, amount, price } = data
              return (
                <div
                  key={index}
                  className="grid grid-cols-4 w-full max-w-[700px] gap-6 items-center mt-8"
                >
                  <div className="col-span-2 flex items-center gap-2">
                    <img
                      src={imageUrl}
                      className="w-[120px] h-[120px]"
                      alt={name}
                    />
                    <h3 className="price pt-serif-regular">{name}</h3>
                  </div>
                  <div>
                    <p className="price pt-serif-bold text-opacity-60 ">
                      {`$${price}`}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="border flex w-fit h-fit p-2 gap-2 text-[1rem] rounded-lg cursor-pointer">
                      <button onClick={() => handleDecrease({ id, amount })}>
                        -
                      </button>
                      <span>{amount}</span>
                      <button onClick={() => handleIncrease({ id, amount })}>
                        +
                      </button>
                    </div>
                    <div onClick={() => handleDelete(id)}>
                      <DeleteIcon />
                    </div>
                  </div>
                </div>
              )
            })
          ) : (
            <p>Your Cart is Empty</p>
          )}
        </div>

        <div className="w-full p-6 max-w-[400px] basis-[45%] border mx-auto mt-8 md:mt-0 rounded-lg">
          <section className="p-text4 pt-serif-bold text-opacity-[80%]  ">
            <article className="flex justify-between items-center my-5 ">
              <p>Subtotal</p>
              <p>{`$${totalAmount}`}</p>
            </article>
            <article className="flex justify-between items-center my-5">
              <p>Delivery fee</p>
              <p>$10.00</p>
            </article>
            <article className="flex justify-between items-center my-5">
              <p>Discount</p>
              <p>-$5.00</p>
            </article>

            <hr />
            <article className="flex justify-between items-center my-5">
              <p>Grand Total</p>
              <p>{totalAmount ? totalAmount - 5.0 - 10.0 : 0}</p>
            </article>
            <hr />
            <div
              className="btn-bg w-full mx-auto text-center my-5 rounded-lg cursor-pointer"
              onClick={() => navigate('/checkout')}
            >
              <button>Proceed to checkout</button>
            </div>
          </section>
        </div>
      </article>
    </section>
  )
}

export default Cart
