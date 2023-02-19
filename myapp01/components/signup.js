import React from 'react'

const signup = () => {
  return (
    <div className='flex justify-center h-[1240px]  mb-12 bg-fixed bg-center bg-gradient-to-r from-lime-500 to-lime-900'>
        
        <div className='  bg-white w-[450px] h-[550px] rounded-md mt-48 '>
          <h1 className='text-center text-xl font-bold pt-10 pb-6'>Creat your own account</h1>  
          
          <form className='mx-6'>
          <label className='labelss'>Username </label>
            <div>
            <input className='inputss'placeholder='Username' type="text"  />
            </div>
            <label className='labelss'>Password </label>
            <div>
            <input className='inputss'placeholder='Password' type="text"  />
            </div>
            <label className='labelss'>Confirm Password </label>
            <div>
            
            <input className='inputss 'placeholder='Confirm Password' type="text"/>
            </div>
            <label className='labelss'>City </label>
            <div>
            <select className='inputss '>
                <option >Choose city</option>
                <option >Lahore</option>
                <option >Karachi</option>
                <option >Sahiwal</option>
                <option >Bhawalpur</option>
            </select>
            </div>
            <label className='labelss'>Date of Birth </label>
            <div>
            <input className='inputss ' type="date"/>          
            </div>
            <div className='text-center font-bold mt-3'>
            <text >Or</text>        
            </div>
            
          </form>
          
          
            <button className='border border-black shadow-lg py-1 px-20 mt-3 ml-20 hover:bg-gray-300'>Log in with Google</button>
            
        </div>

        
    </div>
  )
}

export default signup

