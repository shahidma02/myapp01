import React from 'react'

const stakingapp = () => {
  return (
    <section>
            <div className='bg-gradient-to-r from-orange-400 to-orange-600 py-10'>
        <h1 className='text-3xl text-bold mx-10 text-white'>Staking App</h1>
        <p className='text-xl text-bold mx-48 text-white'>(Reward Token)</p>
        </div>

        <div className='max-w-[1240px] flex  gap-2 mx-6 my-4'>
        
            <h1>To: </h1>
            <input className='border shadow-lg px-4 py-2 h-8' type="text"  />
            <h1>Address: </h1>
                <input className='border shadow-lg px-4 py-2 h-8' type="text"  />
        
        
            <h1>Amount: </h1>
            <input className='border shadow-lg px-4 py-2 h-8' type="text" cols='64' />
            <h1>Spender: </h1>
                <input className='border shadow-lg px-4 py-2 h-8' type="text"  />
        </div>
        <div >
        <button className='border shadow-lg py-1 px-20 mt-1 ml-10 rounded-lg bg-orange-500'>Approve</button>
        <button className='border shadow-lg py-1 px-10 mt-1 ml-6 rounded-lg bg-orange-500'>Decrease Allowance</button>
        <button className='border shadow-lg py-1 px-10 mt-1 ml-6 rounded-lg bg-orange-500'>Increase Allowance</button>
        <button className='border shadow-lg py-1 px-10 mt-1 ml-6 rounded-lg bg-orange-500'>Transfer Tokens</button>
        <button className='border shadow-lg py-1 px-10 mt-1 ml-6 rounded-lg bg-orange-500'>Transfer Token From</button>
        </div>

        <div className='max-w-[1200px] my-16 p-4 h-screen'>
        <div className='grid grid-cols-4 gap-1'>
                <button className='border shadow-lg py-1 px-20 mt-1 ml-10 rounded-lg bg-sky-600'>Approve</button>
                <input className='border shadow-lg px-4 py-2 h-8 my-1' type="text"  />
                <button className='border shadow-lg py-1 px-20 mt-1 ml-4 rounded-lg bg-sky-600'>Approve</button>
                <input className='border shadow-lg px-4 py-2 h-8 my-1' type="email" />

                <button className='border shadow-lg py-1 px-20 mt-1 ml-10 rounded-lg bg-sky-600'>Approve</button>
                <input className='border shadow-lg px-4 py-2 h-8 my-1' type="text"  />
                <button className='border shadow-lg py-1 px-20 mt-1 ml-4 rounded-lg bg-sky-600'>Approve</button>
                <input className='border shadow-lg px-4 py-2 h-8 my-1' type="email" />

                <button className='border shadow-lg py-1 px-20 mt-1 ml-10 rounded-lg bg-sky-600'>Approve</button>
                <input className='border shadow-lg px-4 py-2 h-8 my-1' type="text"  />
                <button className='border shadow-lg py-1 px-20 mt-1 ml-4 rounded-lg bg-sky-600'>Approve</button>
                <input className='border shadow-lg px-4 py-2 h-8 my-1' type="email" />
            </div>
        </div>

        </section>
    

        
    

    
  )
}

export default stakingapp