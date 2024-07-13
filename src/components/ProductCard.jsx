import { useNavigate } from 'react-router-dom'
import { ArrowRight } from './Icons'

const ProductCard = ({ data }) => {
  const photos = data?.photos[0]?.url
  const imageUrl = photos ? `https://api.timbu.cloud/images/${photos}` : ''

  const navigate = useNavigate()
  const { id, name } = data
  const price = data.current_price[0]?.USD?.[0]
  return (
    <div
      className="relative w-full max-w-[287px] h-[377px] rounded-lg mx-auto text-center "
      key={id}
    >
      {imageUrl && (
        <img src={imageUrl} alt="Product" className="w-full h-full" />
      )}
      <div className="absolute border-none rounded-lg bottom-2 w-[90%] max-w-[250px] left-0 right-0 bg-white mx-auto p-2 ">
        <div className="flex w-full justify-between items-center">
          <h3 className=" text-[1.2rem] sm:text-[20px] font-bold text-[rgba(0,0,0,0.6)]">
            {name}
          </h3>
          <button
            onClick={() => navigate(`/product/${id}`)}
            className="p-2 border border-[#D19A64] rounded-full"
          >
            <ArrowRight />
          </button>
        </div>
        <div className="flex justify-between mt-4">
          <h3 className="font-bold text-[20px]">{`$${price}`}</h3>
          <button
            className="p-2 w-[104px] rounded-md bg-[#D19A64]"
            onClick={() => navigate(`/product/${id}`)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
