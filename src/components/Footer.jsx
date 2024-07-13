import { useEffect, useState } from 'react'
import '../fonts/font.css'
const Footer = () => {
  const [year, setYear] = useState(2024)
  useEffect(() => {
    const getYear = new Date()
    const years = getYear.getFullYear()
    setYear(years)
  }, [])
  return (
    <div className="w-full  max-w-[1440px] bg-[#D19A64] min-h-[555px] text-white mt-16 flex items-center justify-center">
      <div className="flex flex-col w-full max-w-[1314px] p-2 ">
        <div className="flex justify-between flex-col xs:flex-row gap-[5%] w-full max-w-[1314px] min-h-[259px]">
          <article className="w-full  h-full min-h-[259px] max-h-[300px] flex flex-col justify-between">
            <h2 className="text-[#F48C06] rubik text-[40px] leading-[47.4px]">
              Lasom
            </h2>
            <p className="font-bold text-[20px] leading-[28px]">
              A jewelry ecommerce platform offering a wide range of products,
              aims to enhance its user experience to increase customer
              satisfaction and drive business growth.
            </p>
            <div className="flex justify-around w-[100px] gap-[4%]">
              <div className="bg-white p-2 rounded-full">
                <img src="/assets/facebook.png" alt="facebook" />
              </div>
              <div className="bg-white p-2 rounded-full">
                <img src="/assets/instagram.png" alt="inst" />
              </div>
              <div className="bg-white p-2 rounded-full">
                <img src="/assets/xx.png" alt="x " />
              </div>
            </div>
          </article>
          <div className="grid grid-cols-2 md:grid-cols-3 basis-[40%] ">
            <article className="w-full flex flex-col gap-5">
              <h2 className="font-bold text-[24px] leading-[33.6px] text-[rgba(0,0,0,0.8)] pt-4">
                Contact
              </h2>
              <div>
                <div>
                  <p>Lagos Nigeria</p>
                </div>
                <div>
                  <p>+234123456788</p>
                </div>
                <div>
                  <p>lasom@xyz.com</p>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div className="mt-16">
          <hr className="w-full" />
          <p className="text-center mt-8 pt-serif-bold text-[24px] text-[#000000CC]">
            Copyright &copy; {year} lasom.com. All rights reserved
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
