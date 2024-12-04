import React from 'react'

import Banner from "../../assets/banner2.jpg";
const BannerImg = {
    backgroundImage:`url(${Banner})`,
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    height:"100%",
    width:"100%",
};
const Subscribe = () => {
  return (
    <div
    data-aos="zoom-in"
    className=' bg-gray-100 dark:bg-gray-800 text-white'
    style={BannerImg}
    >
        <div className='container  backdrop-blur-sm py-10'>
            <div className='space-y-6  max-w-xl mx-auto '>
                <h1 className='text-2xl sm:text-4xl font-semibold  
                !text-center sm:text-left'>Get notified about our products</h1>
                <input 
            //    data-aos="fade-up"
                placeholder='Enter your email' 
                className='w-full p-3 outline-none border border-rose-300 rounded-md'
                type="text" />
            </div>
        </div>
      
    </div>
  )
}

export default Subscribe