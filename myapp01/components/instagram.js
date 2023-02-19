import React from 'react'
import Img6 from '../public/ig-img-6.jpeg';
import Img5 from '../public/ig-img-5.jpeg';
import Img4 from '../public/ig-img-4.jpeg';
import Img3 from '../public/ig-img-3.jpeg';
import Img2 from '../public/ig-img-1.jpeg';
import Img1 from '../public/ig-img-1.jpeg';
import InstagramImg from './instagramimg'
const instagram = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-10'>
        <p className='text-2xl font-bold'>Follow me on Instagram</p>
        <p className='pb-4'>Capture</p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
            <InstagramImg socialImg={Img1}/>
            <InstagramImg socialImg={Img2}/>
            <InstagramImg socialImg={Img3}/>
            <InstagramImg socialImg={Img4}/>
            <InstagramImg socialImg={Img5}/>
            <InstagramImg socialImg={Img6}/>
        </div>
    </div>
  )
}

export default instagram