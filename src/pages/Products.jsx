import ProductCard from '../components/ProductCard'
import MenuHeading from '../components/MenuHeading'
import Section1 from '../components/Section1'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Products = () => {
  const [products, setProducts] = useState([])
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
            size: 10,
            Appid: '2WCV4TIWUYM91X4',
            Apikey: '2b8090be83b344b38db45841f125201420240713052139089722',
          },
        })
        setProducts(resp.data.items)
        console.log(resp)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [page])
  return (
    <section>
      <MenuHeading status={false} location="Products" />
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
      <div className="text-right mr-8">
        <button
          className="my-8 w-[197px] border-[#D19A64] rounded-lg font-bold text-[24px] p-4 border"
          onClick={handlePage}
        >
          {page === 2 ? 'Previous Page' : 'Next Page'}
        </button>
      </div>
    </section>
  )
}

export default Products
