import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useReadAllProductsQuery } from '../services/api/productService'
import { useSelector } from 'react-redux'

const Home = () => {
  let navigate = useNavigate()
  let { isLoading, isError, data, error } = useReadAllProductsQuery()
  let products = data || []

  let searchTerm = useSelector((store) => {
    return store.search
  })
  let searchData = searchTerm.filteredData || []
  console.log(searchData)

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>{error.error}</div>


  return (
    <>

      {
        searchData.length !== 0 ? searchData?.map((data) => (
          <div className='card' key={data.id}>
            <img src={data.image} alt='product' className='object-contain md:w-80 h-80 ' />
            <div className='card-details'>
              <p className='text-md'>{data.title.slice(0, 50)}...</p>
              <span className='text-red-500 '>Rs: {data.price}</span>
              <button className='btn'
                onClick={() => {
                  navigate(`/viewDetails/${data.id}`)
                }}

              >View Details</button>
            </div>
          </div>
        )) : products?.map((data) => (
          <div className='card' key={data.id}>
            <img src={data.image} alt='product' className='object-contain md:w-80 h-80 ' />
            <div className='card-details'>
              <p className='text-md'>{data.title.slice(0, 50)}...</p>
              <span className='text-red-500 '>Rs: {data.price}</span>
              <button className='btn'
                onClick={() => {
                  navigate(`/viewDetails/${data.id}`)
                }}
              >View Details</button>
            </div>
          </div>
        ))
      }
    </>
  )
}

export default Home

