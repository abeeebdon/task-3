import { useNavigate } from 'react-router-dom'
import { ArrRight } from '../components/Icons'
import { useContext } from 'react'

const Success = () => {
  const navigate = useNavigate()
  const { totalAmount } = useContext(AppContext)
  return (
    <section className="flex justify-center">
      <article className="w-full max-w-[640px] ">
        <div className="mt-8 text-center">
          <h2 className="text-[32px] leading-[44px] pt-serif-bold">
            Thank you for shopping at Lasom
          </h2>
          <p className="pt-serif-regular leading-[28px] text-[20px] my-2">
            Your order confirmation and receipt have been sent to xyz@gmail.com
          </p>
        </div>
        <div className="border p-4 mt-4 max-w-[606px] mx-auto rounded-lg">
          <h2>Receipt</h2>
          <article>
            <div className="flex-custom my-4">
              <p>Transaction Date</p>
              <p>05-07-2024</p>
            </div>
            <div className="flex-custom my-4">
              <p>Transaction ID</p>
              <p>4356789200ASDRE</p>
            </div>
            <div className="flex-custom my-4">
              <p>Arrival Date</p>
              <p>10-07-2024</p>
            </div>
          </article>
          <hr />

          <hr />
          <section>
            <article className="flex justify-between items-center my-2">
              <p>Subtotal</p>
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
        <div
          className="btn-bg w-full  sm:w-[90%] mx-auto rounded-lg flex justify-center items-center mt-8"
          onClick={() => navigate('/products')}
        >
          <button>Continue Shopping</button>
        </div>
      </article>
    </section>
  )
}

export default Success
