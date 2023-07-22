import React from 'react'
import Navbar from './Components/Navbar'
import { Outlet, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import ProductDetails from './Components/ProductDetails'

const App = () => {
  return (
    <>

      <Navbar />
      <div className='flex gap-2 align-center justify-center flex-wrap'>
        <Routes>
          <Route path='/' element={<Outlet />}>
            <Route index element={<Home />} />
            <Route path='/viewDetails/:id' element={<ProductDetails />} />
          </Route>
        </Routes>
      </div>
    </>

  )
}

export default App