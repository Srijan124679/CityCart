import React from 'react'
import Title from '../component/Title'
import about from '../assets/about.jpg'
import Footer from '../component/Footer' // ✅ Import Footer

function About() {
  return (
    <div className=' w-[99vw] min-h-[100vh] flex items-center justify-center flex-col  bg-gradient-to-l from-[#141414] to-[#0c2025] gap-[50px] pt-[80px]'>
      <Title text1={'ABOUT'} text2={'US'} />
      <div className='w-[100%]  flex items-center justify-center flex-col lg:flex-row'>
        <div className='lg:w-[50%] w-[100%] flex items-center justify-center '>
          <img src={about} alt="about-img" className='lg:w-[65%] w-[80%] shadow-md shadow-black rounded-sm' />
        </div>
        <div className='lg:w-[50%] w-[80%] flex items-start justify-center gap-[20px] flex-col mt-[20px] lg:mt-[0px]'>
          <p className='lg:w-[80%] w-[100%] text-[white] md:text-[16px] text-[13px]'>
            OneCart born for smart, seamless shopping—created to deliver quality products, trending styles, and everyday essentials in one place...
          </p>
          <p className='lg:w-[80%] w-[100%] text-[white] md:text-[16px] text-[13px]'>
            ...modern shoppers—combining style, convenience, and affordability.
          </p>
          <p className='lg:w-[80%] w-[100%] text-[15px] text-[white] lg:text-[18px] mt-[10px] font-bold'>Our Mission</p>
          <p className='lg:w-[80%] w-[100%] text-[white] md:text-[16px] text-[13px]'>
            Our mission is to redefine online shopping by delivering quality, affordability, and convenience...
          </p>
        </div>
      </div>

      <div className='w-[100%] flex items-center justify-center flex-col gap-[10px]'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
        <div className='w-[80%] flex items-center justify-center lg:flex-row flex-col py-[40px]'>

          {[
            { title: "Quality Assurance", desc: "We guarantee quality..." },
            { title: "Convenience", desc: "Shop easily with fast delivery..." },
            { title: "Exceptional Customer Service", desc: "Our dedicated support team..." }
          ].map((item, index) => (
            <div key={index} className='lg:w-[33%] w-[90%] h-[250px] border-[1px] border-gray-100 flex items-center justify-center gap-[20px] flex-col px-[40px] py-[10px] text-[white] backdrop-blur-[2px] bg-[#ffffff0b]'>
              <b className='text-[20px] font-semibold text-[#bff1f9]'>{item.title}</b>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer /> 
    </div>
  )
}

export default About;
