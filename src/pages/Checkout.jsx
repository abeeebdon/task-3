import { useContext, useEffect, useState } from 'react'
import { Address, HomeAddress, Phone, UserProfile } from '../components/Icons'
import { productData } from '../components/data'
import Success from './Success'
import MenuHeading from '../components/MenuHeading'
import { AppContext } from '../context/AppContext'

const Checkout = () => {
  const [checkout, setCheckout] = useState(false)
  const [checked, SetChecked] = useState(false)
  const [selected, setSelected] = useState(false)
  const { cart, setCart, totalAmount, setTotalAmount } = useContext(AppContext)

  const handleClick = () => {
    if (checked) {
      SetChecked(false)
    } else {
      SetChecked(true)
    }
  }
  const handleSelected = () => {
    if (selected) {
      setSelected(false)
    } else {
      setSelected(true)
    }
  }
  return (
    <section className="flex justify-center">
      <article className="w-full max-w-[1440px]  ">
        <MenuHeading location="checkout" route="/cart" />

        {cart.length === 0 ? (
          <div className="flex justify-center text-[1.5rem]">
            <p>Your Cart is Empty</p>
          </div>
        ) : (
          <>
            {checkout ? (
              <Success />
            ) : (
              <>
                <div className="flex flex-col md:flex-row px-2 gap-10 items-start mt-8">
                  <section className="flex-shrink-[2] w-full max-w-[600px]">
                    <form>
                      <h2 className="form-heading pt-serif-bold text-center sm:text-left my-3">
                        Contact Information
                      </h2>
                      <div>
                        <article className="flex gap-[2%] md:gap-6 flex-wrap xs:flex-nowrap">
                          <div className="input-container w-full mt-4 md:mt-0">
                            <UserProfile />
                            <input
                              type="text"
                              placeholder="Enter your full name"
                              className="outline-none border-none bg-transparent w-full"
                            />
                          </div>
                          <div className="input-container w-full mt-4 md:mt-0">
                            <Phone />
                            <input
                              className="outline-none border-none bg-transparent w-full"
                              type="text"
                              placeholder="Enter your phone number"
                            />
                          </div>
                        </article>
                      </div>
                      <h2 className="form-heading pt-serif-bold mt-8 text-center sm:text-left my-3">
                        Shipping Address
                      </h2>
                      <div className="form-input mb-4 ">
                        <div className="input-container mb-4">
                          <HomeAddress />
                          <input
                            type="text"
                            placeholder="Enter your home Address"
                          />
                        </div>
                        <article className="flex gap-[2%] md:gap-6 flex-wrap xs:flex-nowrap">
                          <div className="input-container w-full mt-4 md:mt-0">
                            <Address />
                            <input
                              type="text"
                              placeholder="Enter your State"
                              className="outline-none border-none bg-transparent w-full"
                            />
                          </div>
                          <div className="input-container w-full mt-4 md:mt-0">
                            <Address />
                            <input
                              type="text"
                              placeholder="Enter your city"
                              className="outline-none border-none bg-transparent w-full"
                            />
                          </div>
                        </article>
                      </div>
                      <article>
                        <div className="flex items-center">
                          <div onClick={handleClick}>
                            <div className="w-[30px] h-[30px] justify-center items-center flex border ">
                              {!checked ? (
                                <img src="/assets/mark.png" />
                              ) : (
                                <div className="hidden"></div>
                              )}
                            </div>
                          </div>

                          <span className="price pt-serif-regular ml-4 color-1">
                            Ship to another address
                          </span>
                        </div>
                        <div className="flex items-center my-3">
                          <div onClick={handleClick}>
                            <div className="w-[30px] h-[30px] justify-center items-center flex border ">
                              {checked ? (
                                <img src="/assets/mark.png" />
                              ) : (
                                <div className="hidden"></div>
                              )}
                            </div>
                          </div>
                          <span className="price pt-serif-regular ml-4 color-1">
                            Ship to another address
                          </span>
                        </div>
                      </article>
                      <article className=" flex mx-auto gap-6 flex-wrap mt-4 items-center">
                        <div
                          className="flex items-center gap-2  md:mx-2 xs:mx-2"
                          onClick={handleSelected}
                        >
                          <div className="flex w-[20px] h-[20px] justify-center items-center rounded-full border border-[#D19A64]">
                            {!selected ? (
                              <img src="/assets/brown.png" />
                            ) : (
                              <div className="hidden"></div>
                            )}
                          </div>

                          <span>Pay with card</span>
                        </div>
                        <div
                          className="flex items-center gap-2"
                          onClick={handleSelected}
                        >
                          <div className="flex w-[20px] h-[20px] justify-center items-center rounded-full border border-[#D19A64]">
                            {selected ? (
                              <img src="/assets/brown.png" />
                            ) : (
                              <div className="hidden"></div>
                            )}
                          </div>
                          <span>Pay on delivery</span>
                        </div>
                      </article>
                    </form>
                  </section>
                  <div className=" hidden md:block min-w-1 h-[450px] text-black border-2">
                    <span className="text-black"></span>
                  </div>
                  <section className="flex-shrink-0 mx-auto xs:mx-1">
                    <div>
                      <h2 className="pt-serif-bold form-heading text-center xs:mx-auto">
                        Your Order
                      </h2>
                      {cart.map((data) => {
                        const { imageUrl, name, id, amount, price } = data

                        return (
                          <div className="flex gap-6 items-center p-4 px-0">
                            <img
                              src={imageUrl}
                              alt={id}
                              className="w-[120px] h-[140px]"
                            />
                            <div>
                              <h3 className="pt-serif-bold text-[20px] leading-[26.5px]">
                                {name}
                              </h3>
                              <p className="pt-serif-bold text-[24px] leading-[31.8px]">
                                {price}
                              </p>
                            </div>
                          </div>
                        )
                      })}

                      <hr />
                      <section>
                        <article className="flex justify-between items-center my-2">
                          <p>Total</p>
                          <p>{totalAmount}</p>
                        </article>
                        <article className="flex justify-between items-center my-2">
                          <p>Delivery fee</p>
                          <p>$10.00</p>
                        </article>
                        <article className="flex justify-between items-center my-2">
                          <p>Discount</p>
                          <p>-$5.00</p>
                        </article>
                      </section>
                      <hr />
                      <div className="flex justify-between items-center my-2">
                        <h3>Total</h3>
                        <p>{totalAmount ? totalAmount - 5.0 - 10.0 : 0}</p>
                      </div>
                    </div>
                  </section>
                </div>
                <div
                  className="mt-8 xs:mx-2 cursor-pointer btn-bg mx-auto rounded-lg h-[53px] flex justify-center items-center w-full max-w-[386px]"
                  onClick={() => {
                    totalAmount == 0
                      ? alert(' You have not selected a product ')
                      : setCheckout(true)
                  }}
                >
                  <button>Proceed</button>
                </div>
              </>
            )}
          </>
        )}
      </article>
    </section>
  )
}

export default Checkout
