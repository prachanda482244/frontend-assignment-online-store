import React from 'react'
import { NavLink } from 'react-router-dom'
import FormikSearchBar from '../Formik/FormikSearchBar'

const Navbar = () => {

    return (
        <header className=' pt-4 '>

            <nav className='flex justify-between items-center w-[90%] m-auto text-sm' >
                <div className="text-3xl text-cyan-500 hover:text-cyan-600">
                    <NavLink className='text-sm md:text-2xl' to='/'>
                        Online Store
                    </NavLink>

                </div>
                <div className="search">
                    <FormikSearchBar />
                </div>
                <div className="btns">
                    <NavLink className='login-btn' to='/login'>Login</NavLink>
                </div>
            </nav>
            <div className='w-full border-[#e5e7eb]-200 border-2 mt-4'></div>
        </header>
    )
}

export default Navbar