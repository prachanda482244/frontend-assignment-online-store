import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useReadSingleProductQuery } from '../services/api/productService'

const ProductDetails = () => {
    let params = useParams()
    let id = params.id
    const navigate = useNavigate()
    const { isLoading, data } = useReadSingleProductQuery(id)
    console.log(data)
    const product = data || []

    const goBack = () => {
        navigate('/')
    }
    return (
        <>
            {
                isLoading ? <div>Loading...</div> :
                    <div className='box md:relative' >
                        <div className='img flex flex-col items-center mt-5'>
                            <img src={product.image} className='md:w-[450px] md:h-[60vh]  object-contain border-2 border-black p-2' alt='product' />
                            <h1 className='text-sm font-semibold' >{product.title}</h1>
                            <span className='text-5xl text-red-500'>Rs:{product.price}</span>
                        </div>

                        <div className='box-details mt-3'>
                            <p className='border-2 border-x-black w-[80vw] md:w-auto md:border-none'> {product.description}</p>
                            <div className='flex justify-center items-center w-[70vw] md:w-auto '>
                                <button className=' w-full  bg-yellow-400 cart-btn'>Add to cart</button>
                                <button className='w-full  bg-orange-400 cart-btn'>Buy now</button>
                            </div>
                        </div>
                        <button className='absolute md:bottom-0 md:left-0 left-4 btn' onClick={goBack}>&lt;-</button>

                    </div>
            }
        </>

    )
}

export default ProductDetails