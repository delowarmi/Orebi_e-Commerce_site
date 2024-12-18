import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Heading from '../components/Heading'
import { MdWindow } from "react-icons/md";
import { AiOutlineBars } from "react-icons/ai";
import { FaSortDown } from "react-icons/fa";
// import Product from '../parts/Product';
// import pic1 from '../assets/pro1.jpg'
// import pic2 from '../assets/pro2.png'
// import pic3 from '../assets/pro3.png'
// import pic4 from '../assets/pro4.png'
// import pic5 from '../assets/pro5.png'
// import pic6 from '../assets/pro6.png'
// import pic7 from '../assets/pro7.png'
// import pic8 from '../assets/pro8.png'
// import pic9 from '../assets/pro9.png'
// import pic10 from '../assets/pro10.png'
// import pic11 from '../assets/pro11.png'
// import pic12 from '../assets/pro12.png'
import { useState} from 'react'
import OutsideClickHandler from 'react-outside-click-handler';
// import Pagination from '../components/Pagination';
const Shop = () => {
  const [hidden, setHidden] = useState(false);
  return (
    <div className='pt-[100px] pb-[50px]'>
      <Container>
        <Heading as={'h3'} text={'Products'} className=" font-dm text-[40px] font-bold"/>
        <Heading as={'p'} text={'Home  >  Products'} className=" font-dm text-[16px] font-regular text-InfoColor pb-[100px]"/>
        <Flex>
        <div className='w-[24%] relative'>
      <div className='w-full relative'>
        <OutsideClickHandler onOutsdeClick ={() => { setHidden(false); }} >
                <Flex className={'items-center'}>
                
                <div onClick={() => setHidden(!hidden)}>
                <Heading as={'h3'} text={'Shop by Category'} className='font-dm text-[20px] pl-2 font-bold file: cursor-pointer relative'onClick={() => setHidden(!hidden)} />
                </div>
                {hidden && (
                  <div className='bg-white p-3 w-full absolute left-[0px] top-[30px] rounded-md'>
                      <ul className='font-dms text-[16px] text-TextColor'>
                        <li>
                           <Heading as={'p'} text={'Category 1'}className='border-b pb-3 bottom-BorderInfoColor font-dm text-navColor'/>
                           <Heading as={'p'} text={'Category 2'}className='border-b py-3 bottom-BorderInfoColor font-dm text-navColor'/>
                           <Heading as={'p'} text={'Category 3'}className='border-b py-3 bottom-BorderInfoColor font-dm text-navColor'/>
                           <Heading as={'p'} text={'Category 4'}className='border-b py-3 bottom-BorderInfoColor font-dm text-navColor'/>
                           <Heading as={'p'} text={'Category 5'}className='border-b py-3 bottom-BorderInfoColor font-dm text-navColor'/>
                        </li>
                      </ul>  
                  </div>
                 )}
                </Flex>
        </OutsideClickHandler>
    </div>
    <div className='w-full relative top-[320px]'>
        <OutsideClickHandler onOutsdeClick ={() => { setHidden(false); }} >
                <Flex className={'items-center'}>
                
                <div onClick={() => setHidden(!hidden)}>
                <Heading as={'h3'} text={'Shop by Color'} className='font-dm text-[20px] pl-2 font-bold file: cursor-pointer relative'onClick={() => setHidden(!hidden)} />
                </div>
                {hidden && (
                  <div className='bg-white p-3 w-full absolute left-[0px] top-[30px] rounded-md'>
                      <ul className='font-dms text-[16px] text-TextColor'>
                        <li>
                          
                            <input type="color" value="#000000" className='border-b pb-3 bottom-BorderInfoColor font-dm text-navColor'/>Color 1 <br/><br/>
                            <input type="color" value="#e8a317" className='border-b pb-3 bottom-BorderInfoColor font-dm text-navColor'/>Color 2 <br/><br/>
                            <input type="color" value="#008000" className='border-b pb-3 bottom-BorderInfoColor font-dm text-navColor'/>Color 3 <br/><br/>
                            <input type="color" value="#ffffc2" className='border-b pb-3 bottom-BorderInfoColor font-dm text-navColor'/>Color 4 <br/><br/>
                            <input type="color" value="#ff0000" className='border-b pb-3 bottom-BorderInfoColor font-dm text-navColor'/>Color 5
                            
                        </li>
                      </ul>  
                  </div>
                 )}
                </Flex>
        </OutsideClickHandler>
    </div>
    <div className='w-full relative top-[620px]'>
        <OutsideClickHandler onOutsdeClick ={() => { setHidden(false); }} >
                <Flex className={'items-center'}>
                
                <div onClick={() => setHidden(!hidden)}>
                <Heading as={'h3'} text={'Shop by Brand'} className='font-dm text-[20px] pl-2 font-bold file: cursor-pointer relative'onClick={() => setHidden(!hidden)} />
                </div>
                {hidden && (
                  <div className='bg-white p-3 w-full absolute left-[0px] top-[30px] rounded-md'>
                      <ul className='font-dms text-[16px] text-TextColor'>
                        <li>
                           <Heading as={'p'} text={'Brand 1'}className='border-b pb-3 bottom-BorderInfoColor font-dm text-navColor'/>
                           <Heading as={'p'} text={'Brand 2'}className='border-b py-3 bottom-BorderInfoColor font-dm text-navColor'/>
                           <Heading as={'p'} text={'Brand 3'}className='border-b py-3 bottom-BorderInfoColor font-dm text-navColor'/>
                           <Heading as={'p'} text={'Brand 4'}className='border-b py-3 bottom-BorderInfoColor font-dm text-navColor'/>
                           <Heading as={'p'} text={'Brand 5'}className='border-b py-3 bottom-BorderInfoColor font-dm text-navColor'/>
                        </li>
                      </ul>  
                  </div>
                 )}
                </Flex>
        </OutsideClickHandler>
    </div>
    <Flex>
    <div className='w-full relative top-[950px]'>
        <OutsideClickHandler onOutsdeClick ={() => { setHidden(false); }} >
                <Flex className={'items-center'}>
                
                <div onClick={() => setHidden(!hidden)}>
                <Heading as={'h3'} text={'Shop by Price'} className='font-dm text-[20px] pl-2 font-bold file: cursor-pointer relative'onClick={() => setHidden(!hidden)} />
                </div>
                {hidden && (
                  <div className='bg-white p-3 w-full absolute left-[0px] top-[30px] rounded-md'>
                      <ul className='font-dms text-[16px] text-TextColor'>
                        <li>
                           <Heading as={'p'} text={'$0.00 - $9.99'}className='border-b pb-3 bottom-BorderInfoColor font-dm text-navColor'/>
                           <Heading as={'p'} text={'$10.00 - $19.99'}className='border-b py-3 bottom-BorderInfoColor font-dm text-navColor'/>
                           <Heading as={'p'} text={'$20.00 - $29.99'}className='border-b py-3 bottom-BorderInfoColor font-dm text-navColor'/>
                           <Heading as={'p'} text={'$30.00 - $39.99'}className='border-b py-3 bottom-BorderInfoColor font-dm text-navColor'/>
                           <Heading as={'p'} text={'$40.00 - $69.99'}className='border-b py-3 bottom-BorderInfoColor font-dm text-navColor'/>
                        </li>
                      </ul>  
                  </div>
                 )}
                </Flex>
        </OutsideClickHandler>
    </div>
    </Flex>
  </div>

          <div className="w-[75%]">
          

            <Flex>
              <div className="w-[50%]">
               <Flex><MdWindow className='p-1 text-[32px] '/> <AiOutlineBars className='p-1 text-[32px] '/> </Flex>
              </div>
              <div className="w-[50%]">
                <Flex>
                  <div className="w-[60%] relative ml-[170px]">
                    <Flex className={'gap-x-3'}>
                      <Heading as={'p'} text={'Sort by:'} className='font-dm font-regular text-[16px] text-InfoColor '/>
                      <input type="text"className='border border-InfoColor  bg-white  w-[100px]'placeholder='Featured' />
                      <FaSortDown className='absolute right-2 top-1/3 -translate-y-1/2'/>
                    </Flex>
                  </div>
                  <div className="w-[40%] relative">
                  <Flex className={'gap-x-3'}>
                      <Heading as={'p'} text={'Show:'} className='font-dm font-regular text-[16px] text-InfoColor '/>
                      <input type="text"className='border border-InfoColor bg-white  w-[100px]'placeholder='36' />
                      <FaSortDown className='absolute right-4 top-1/3 -translate-y-1/2'/>
                    </Flex>
                  </div>
                </Flex>
              </div>
              
            </Flex>
            
            
          </div>
          
  
        </Flex>
      </Container>
      
    </div>
  )
}

export default Shop
