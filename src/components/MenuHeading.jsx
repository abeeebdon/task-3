import React, { useEffect, useState } from 'react'
import { ArrLeft, ArrRight } from './Icons'
import { useNavigate } from 'react-router-dom'

const MenuHeading = ({ location, route, status }) => {
  const [path, setPath] = useState('')
  const navigate = useNavigate()
  useEffect(() => {
    if (route) {
      setPath(route)
    } else setPath('products')
  }, [])
  return (
    <section className="h-[97px] flex items-center">
      <article className="flex justify-between w-full max-w-[1440px] bg-[#F5F5F5] p-4">
        <div className="flex items-center p-text pt-serif-bold ">
          <h2 className="text-black text-opacity-[80%]">Home</h2>
          <ArrRight />
          <p className="color-1">{location}</p>
        </div>
        <div
          className={
            status === false
              ? 'hidden'
              : 'flex items-center cursor-pointer gap-4'
          }
          onClick={() => navigate(`${route}`)}
        >
          <p className="hidden xs:block pt-serif-regular p-text color-1">
            Back
          </p>
          <ArrLeft />
        </div>
      </article>
    </section>
  )
}

export default MenuHeading
