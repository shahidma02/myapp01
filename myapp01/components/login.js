import React from 'react'
import Image from 'next/image'
import Logo from '../public/logo.png'

const login = () => {
  return (
    <div className='flex text-center justify-center items-center h-screen  mt-40 pt-20 pb-60 bg-gray-100'>
        <div className='border-4 w-1/2 text-center justify-center items-center h-screen pb-[500px]  ml-52  mt-40 bg-white ' >
        <div className='mx-36 mt-16'>
        <Image src={Logo} alt='/' className='border-4'
            width='10'
            height='12'
            layout='responsive'
            objectFit='cover'/>
        </div>
        <div className='justify-center text-center items-center  '>
            <h1 className='my-4'>We are Allah's Team</h1>
            <p className='mb-2'>Please login to your account </p>
            <input className='border shadow-lg px-4 py-2 h-8 my-2 rounded-md'placeholder='Username' type="text"  />
            <input className='border shadow-lg px-4 py-2 h-8 my-2 rounded-md'placeholder='Password' type="text"  />
            <button className='border shadow-lg py-1 px-20 mt-1 ml-0 rounded-lg bg-gradient-to-r from-lime-500 to-lime-900'>LOG IN</button>
            <p class="text-gray-500 text-center my-4" href="#!">Forgot password?</p>
            
        </div>
        <div class="flex items-center justify-between pb-6 px-20">
                    <p class="mb-0 text-center mr-2">Don't have an account?</p>
                    <button
                      type="button"
                      class="inline-block px-6 py-2 border-2 border-lime-900 text-lime-900 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      Danger
                    </button>
                  </div>
    </div>


        <div className='w-1/2  bg-gradient-to-r from-lime-500 to-lime-900 pb-[500px] mr-52  mt-40 text-center justify-center items-center h-screen'>
        <div class="text-white px-4 py-6 ">
                <h4 class="text-xl font-semibold mb-6 mx-14 mt-40">We are more than just a company</h4>
                <p class="text-sm mx-10">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                </p>
              </div>
        </div >


    </div>
  )
}

export default login



