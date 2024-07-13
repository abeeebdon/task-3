import { useNavigate } from 'react-router-dom'

const Section1 = () => {
  const navigate = useNavigate()
  return (
    <section className="relative">
      <div>
        <img
          src="/assets/sec1.png"
          alt="bg"
          className="w-[100%] max-w-[1440px] h:md-[870px]"
        />
      </div>
      <div className="absolute bottom-[2vw] xs:bottom-6 md:bottom-[8.5rem] left-[2%] w-[70%] max-w-[779px] text-[#F5F5F5]">
        <h2 className="text-[pt-serif-bold] text-[5vw]  xs:text-[24px] md:text-[40px]">
          Elevate Your Beauty with our Timeless Jewelry Collections
        </h2>
        <p className="text-[pt-serif-regular] text-5 md:text-[32px] my-4">
          You are never fully dressed without a jewelry
        </p>
        <button
          onClick={() => navigate('/cart')}
          className="text-[pt-serif-regular] text-5 md:text-[28px] border-4 border-[#F5F5F5]  w-[208px] h-[51px] rounded-lg pb-2"
        >
          Shop now
        </button>
      </div>
    </section>
  )
}

export default Section1
