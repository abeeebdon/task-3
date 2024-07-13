import { useNavigate, useParams } from 'react-router-dom'
import { ArrRight, Heart, Plus } from '../components/Icons'
import { btnData, productData } from '../components/data'
import { useContext, useEffect, useState } from 'react'
import MenuHeading from '../components/MenuHeading'
import ProductInfo from '../components/ProductInfo'
import axios from 'axios'
import { AppContext } from '../context/AppContext'

const ProductDetails = () => {
  const [product, setProduct] = useState({})
  const [result, setResult] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [num, setNum] = useState(1)
  const { id } = useParams()
  const navigate = useNavigate()
  const { cart, setCart } = useContext(AppContext)
  const handleBtn = (id) => {
    setNum(id)
    console.log(num)
  }
  const url = `https://timbu-get-single-product.reavdev.workers.dev/${id}`
  const photos = product?.photos?.[0]?.url
  const imageUrl = photos ? `https://api.timbu.cloud/images/${photos}` : ''

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const resp = await axios.get(url, {
          params: {
            organization_id: '86f99e46e89448f8bfc7329f1f632b99',
            reverse_sort: false,
            page: 1,
            size: 10,
            Appid: '2WCV4TIWUYM91X4',
            Apikey: '2b8090be83b344b38db45841f125201420240713052139089722',
          },
        })
        if (resp.status === 200) {
          setIsLoading(false)
          setProduct(resp.data)
        }
      } catch (err) {
        if (err) {
          console.log(err)
        }
      }
    }
    fetchData()
  }, [])
  const handleIncrease = () => {
    if (result === product?.available_quantity) {
      setResult(1)
    } else {
      setResult(result + 1)
    }
  }
  const handleDecrease = () => {
    if (result === 1) {
      setResult(1)
    } else {
      setResult(result - 1)
    }
  }
  const handleCart = () => {
    const newCart = {
      id: product?.id,
      amount: result,
      imageUrl: imageUrl,
      name: product?.name,
      price: product?.current_price,
    }
    const findCart = cart.find((data) => data.id === id)
    if (findCart) {
      alert('You added this product already')
    } else {
      setCart([...cart, newCart])
    }

    navigate('/cart')
  }
  return (
    <section className="flex justify-center">
      <article className="w-full max-w-[1440px]  ">
        <MenuHeading location="Productdetails" />
        <div>
          {product ? (
            <>
              <div className="flex p-2 gap-6 items-center h-full max-h-[472px]">
                <div className="w-full h-full max-h-[471px] max-w-[436px]">
                  <img
                    src={imageUrl}
                    alt={product.src}
                    className="w-full h-full"
                  />
                </div>
                <div>
                  <h2 className="pt-serif-bold text-[24px] leading-[33.6px]">
                    {product.name}
                  </h2>
                  <p className="pt-serif-bold text-[24px] leading-[33.6px]">{`$${product.current_price}`}</p>
                  <div className="flex items-center gap-4">
                    <div className="bg-[#D19A64] flex justify-center items-center px-3 text-[24px] rounded-full">
                      <button
                        className="btn  rounded-full text-white "
                        onClick={handleDecrease}
                      >
                        -
                      </button>
                    </div>
                    <div className="w-[40px] h-[40px] bg-[#F8F8F8] rounded-full flex justify-center items-center">
                      <span>{result}</span>
                    </div>

                    <div className="bg-[#D19A64] flex justify-center items-center px-3 text-[24px] rounded-full">
                      <button
                        className="btn  rounded-full text-white"
                        onClick={handleIncrease}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center my-2 gap-4">
                    <div className="flex justify-center items-center rounded-lg bg-[#D19A64] w-[116px] h-[37px]">
                      <button
                        className="pt-serif-regular text-[20px] text-white leading-[28px]"
                        onClick={handleCart}
                      >
                        Add to cart
                      </button>
                    </div>
                    <div className="p-2 bg-[#F8F8F8] rounded-full flex justify-center items-center">
                      <Heart />
                    </div>
                  </div>
                  <div className="flex">
                    <p>Category</p>
                    <ArrRight />
                    <p>Rings</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-4">
                <div className="flex gap-4">
                  {btnData.map((data) => {
                    return (
                      <div key={data.id}>
                        <button
                          className={
                            data.id === num
                              ? 'text-[#D19A64] price pt-serif-bold font-[700]'
                              : 'price bg-white pt-serif-bold font-[700]'
                          }
                          onClick={() => handleBtn(data.id)}
                        >
                          {data.name}
                        </button>
                      </div>
                    )
                  })}
                </div>
                <div>
                  <ProductInfo num={num} name={product.name} />
                </div>
              </div>
            </>
          ) : (
            <p>isLoading</p>
          )}
        </div>
      </article>
    </section>
  )
}

export default ProductDetails
