import React from 'react'
import Image from 'next/image'
import QQQ from '../public/Quran.jpg'
import C1 from '../public/download.jpg'

const home = () => {
  return (
    <div>
    <div className=" flex items-center  h-[462px] mb-12 bg-fixed bg-center bg-cover custom-img2">
      {/*overlay*/}
      <div className="absolute top-0 left-0 right-0 bottom-28 bg-black/70 z-[2]"/>
      <div className="p-5 text-white z-[3] ">
        
      <h2 className="text-3xl font-bold ml-40 ">Welcome to Short Dars-e-Nizami Courses</h2>
        <p className="py-5 text-xl ml-40  ">Your One-Stop Learning Center</p>
        <button className='bg-transparent border-2 ml-40 px-3 py-2 hover:text-gray-600 hover:border-gray-600'>Register now</button>
      </div>

      
    </div>

    <div className='text-center items-center justify-center '>
        <h2 className="text-3xl font-bold  pb-4 " >What is Short Dars-e-Nizami?</h2>
        <p className=' mx-16 pb-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <iframe className='w-[700px] h-[400px] ml-[300px] pb-10'  src="https://www.youtube.com/embed/4K1GXJUtUbs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>    
    </div>

    <div className='flex justify-center items-center text-center'>
        <div className='w-1/2 py-16 pl-16 pr-6'>
            <h1 className='pb-4 text-2xl font-bold'>Who can benefit from Short Dars-e-Nizami Courses?</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
        </div>
        
        <div className='w-1/2 p-10'>
            <Image src={QQQ} />
        </div>
    </div>

    <div className='bg-slate-200 pb-24'>
    <h1 className='pb-2 text-2xl font-bold text-center pt-6'>Courses Available</h1>
    <p className='text-center pb-10'>Most informative and enlightening courses.</p>
    <div className='flex justify-center items-center grid-cols-3 gap-10'>
        <div className='featured_courses '>
        <Image src={C1} width='300px' heigth='200px'/>
        <h1 className='py-5 font-bold'>Khasoosi Khitab</h1>
        </div>

        <div className='featured_courses'>
        <Image src={C1} width='300px' heigth='200px'/>
        <h1 className='py-5 font-bold'>Khasoosi Khitab</h1>
        </div>

        <div className='featured_courses' >
        <Image src={C1} width='300px' heigth='200px'/>
        <h1 className='py-5 font-bold'>Khasoosi Khitab</h1>
        </div>
    </div>
    </div>
    
        
    </div>
    
  )
}

export default home