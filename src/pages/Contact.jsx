import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Image from '../components/Image'
import Mapp from '../assets/map.png'

const Contact = () => {
  return (
    <div className='py-[100px]'>
      <Container>
        <Heading as={'h3'} text={'Contacts'} className='font-dm font-bold text-[40px]'/>
        <Heading as={'h3'} text={'Home < Contacts'} className='font-dm font-regular text-InfoColor text-[16px]'/>  

        <Heading as={'h3'} text={'Fill up a Form'} className='font-dm font-bold text-[40px] pt-[100px]'/>
                  <div className='pt-[60px]'>
                  <label for="uname"><b className='pl-3 '>Name</b></label> <br/>
                  <input type="text" className='border border-InfoColor   p-3  w-[500px] h-[40px] ' placeholder="Your name here" name="uname"required></input>
                  </div>
                  <div className='pt-[30px]'>
                  <label for="uname"><b className='pl-3 mt-[20px]'>Email</b></label> <br/>
                  <input type="text" className='border border-InfoColor   p-3  w-[500px] h-[40px]' placeholder="Your email here" name="uname"required></input>
                  </div>
                  <div className='pt-[30px]'>
                  <label for="uname"><b className='pl-3 mt-[20px]'>Massege</b></label> <br/>
                  <input type="text" className='border border-InfoColor   p-3 w-[500px] h-[100px]' placeholder="Your massege here" name="uname"required></input>
                  </div>
                  <div className='pt-[30px]'>
                  <button className='border border-navColor py-[10px] px-[60px] mt-[40px] bg-black text-white'>Post</button>
                  </div>

                  <div className='pt-[100px]'>
                    <Image ImgSrc={Mapp}/>
                  </div>
      </Container>
    </div>
  )
}

export default Contact
