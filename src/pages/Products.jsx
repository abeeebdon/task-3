import ProductCard from '../components/ProductCard'
import MenuHeading from '../components/MenuHeading'
import Section1 from '../components/Section1'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Products = () => {
  const [products, setProducts] = useState([])
  const [length, setLength] = useState('')
  const [page, setPage] = useState(1)
  const url = 'https://timbu-get-all-products.reavdev.workers.dev/'
  const handlePage = () => {
    if (page < 2) setPage(page + 1)
    else {
      setPage(1)
    }
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get(url, {
          params: {
            organization_id: '86f99e46e89448f8bfc7329f1f632b99',
            reverse_sort: false,
            page: page,
            size: 12,
            Appid: '2WCV4TIWUYM91X4',
            Apikey: '2b8090be83b344b38db45841f125201420240713052139089722',
          },
        })
        setProducts(resp.data.items)
        setLength(resp.data.total)
        console.log(resp)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [page])
  return (
    <section>
      <MenuHeading status={false} />
      <Section1 />
      <h2 className="my-8 p-text2 px-4 pt-serif-bold p-2">
        Choose from our varieties of products...
      </h2>
      <div className="grid p-2 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[1.5rem] relative ">
        {products.map((data) => {
          return (
            <div key={data.id}>
              <ProductCard data={data} />
            </div>
          )
        })}
      </div>
      <div className="text-right mr-8 flex flex-col">
        <p>
          {products.length} of {length} Products
        </p>
        <div className="flex justify-end gap-4 text-white">
          <p className="p-2 bg-1 rounded-full px-4" onClick={() => setPage(1)}>
            1
          </p>
          <p className="p-2 bg-1 rounded-full px-4" onClick={() => setPage(2)}>
            2
          </p>
        </div>
      </div>
    </section>
  )
}

export default Products
