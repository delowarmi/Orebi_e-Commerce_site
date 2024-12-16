import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Heading from '../components/Heading'
import { MdWindow } from "react-icons/md";
import { AiOutlineBars } from "react-icons/ai";
import { FaSortDown } from "react-icons/fa";
import Product from '../parts/Product';
import pic1 from '../assets/pro1.jpg'
import pic2 from '../assets/pro2.png'
import pic3 from '../assets/pro3.png'
import pic4 from '../assets/pro4.png'
import pic5 from '../assets/pro5.png'
import pic6 from '../assets/pro6.png'
import pic7 from '../assets/pro7.png'
import pic8 from '../assets/pro8.png'
import pic9 from '../assets/pro9.png'
import pic10 from '../assets/pro10.png'
import pic11 from '../assets/pro11.png'
import pic12 from '../assets/pro12.png'

const Shop = () => {
  return (
    <div className='pt-[100px] pb-[50px]'>
      <Container>
        <Heading as={'h3'} text={'Products'} className=" font-dm text-[40px] font-bold"/>
        <Heading as={'p'} text={'Home  >  Products'} className=" font-dm text-[16px] font-regular text-InfoColor pb-[100px]"/>
        <Flex>
          <div className="w-[24%]">
            <Heading as={'h3'} text={'Shop by Category'} className='font-dm text-[20px] font-bold'/>
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
                      <input type="text"className='className =  bg-white  w-[100px]'placeholder='Featured' />
                      <FaSortDown className='absolute right-2 top-1/3 -translate-y-1/2'/>
                    </Flex>
                  </div>
                  <div className="w-[40%] relative">
                  <Flex className={'gap-x-3'}>
                      <Heading as={'p'} text={'Show:'} className='font-dm font-regular text-[16px] text-InfoColor '/>
                      <input type="text"className='className =  bg-white  w-[100px]'placeholder='36' />
                      <FaSortDown className='absolute right-4 top-1/3 -translate-y-1/2'/>
                    </Flex>
                  </div>
                </Flex>
              </div>
              
            </Flex>
            <Flex className={'justify-between pt-8'}>
              <div className="w-[33%] relative group px-2">
                <Product 
                imgSrc={pic1}
                badge={'New'}
                para={'Add to Wish List'}
                para2={'Compare'}
                para3={'Add to Cart'}
                para4={'Basic Crew Neck Tee'}
                para5={'$44.00'}
                />
                </div>
                <div className="w-[33%] relative group px-2">
                <Product 
                imgSrc={pic2}
                badge={'New'}
                para={'Add to Wish List'}
                para2={'Compare'}
                para3={'Add to Cart'}
                para4={'Basic Crew Neck Tee'}
                para5={'$44.00'}
                />
                </div>
                <div className="w-[33%] relative group px-2">
                <Product 
                imgSrc={pic3}
                badge={'New'}
                para={'Add to Wish List'}
                para2={'Compare'}
                para3={'Add to Cart'}
                para4={'Basic Crew Neck Tee'}
                para5={'$44.00'}
                />
                </div> 
            </Flex>
            <Flex className={'justify-between pt-8'}>
              <div className="w-[33%] relative group px-2">
                <Product 
                imgSrc={pic4}
                badge={'New'}
                para={'Add to Wish List'}
                para2={'Compare'}
                para3={'Add to Cart'}
                para4={'Basic Crew Neck Tee'}
                para5={'$44.00'}
                />
                </div>
                <div className="w-[33%] relative group px-2">
                <Product 
                imgSrc={pic5}
                badge={'New'}
                para={'Add to Wish List'}
                para2={'Compare'}
                para3={'Add to Cart'}
                para4={'Basic Crew Neck Tee'}
                para5={'$44.00'}
                />
                </div>
                <div className="w-[33%] relative group px-2">
                <Product 
                imgSrc={pic6}
                badge={'New'}
                para={'Add to Wish List'}
                para2={'Compare'}
                para3={'Add to Cart'}
                para4={'Basic Crew Neck Tee'}
                para5={'$44.00'}
                />
                </div> 
            </Flex>
            <Flex className={'justify-between pt-8'}>
              <div className="w-[33%] relative group px-2">
                <Product 
                imgSrc={pic7}
                badge={'New'}
                para={'Add to Wish List'}
                para2={'Compare'}
                para3={'Add to Cart'}
                para4={'Basic Crew Neck Tee'}
                para5={'$44.00'}
                />
                </div>
                <div className="w-[33%] relative group px-2">
                <Product 
                imgSrc={pic8}
                badge={'New'}
                para={'Add to Wish List'}
                para2={'Compare'}
                para3={'Add to Cart'}
                para4={'Basic Crew Neck Tee'}
                para5={'$44.00'}
                />
                </div>
                <div className="w-[33%] relative group px-2">
                <Product 
                imgSrc={pic9}
                badge={'New'}
                para={'Add to Wish List'}
                para2={'Compare'}
                para3={'Add to Cart'}
                para4={'Basic Crew Neck Tee'}
                para5={'$44.00'}
                />
                </div> 
            </Flex>
            <Flex className={'justify-between pt-8'}>
              <div className="w-[33%] relative group px-2">
                <Product 
                imgSrc={pic10}
                badge={'New'}
                para={'Add to Wish List'}
                para2={'Compare'}
                para3={'Add to Cart'}
                para4={'Basic Crew Neck Tee'}
                para5={'$44.00'}
                />
                </div>
                <div className="w-[33%] relative group px-2">
                <Product 
                imgSrc={pic11}
                badge={'New'}
                para={'Add to Wish List'}
                para2={'Compare'}
                para3={'Add to Cart'}
                para4={'Basic Crew Neck Tee'}
                para5={'$44.00'}
                />
                </div>
                <div className="w-[33%] relative group px-2">
                <Product 
                imgSrc={pic12}
                badge={'New'}
                para={'Add to Wish List'}
                para2={'Compare'}
                para3={'Add to Cart'}
                para4={'Basic Crew Neck Tee'}
                para5={'$44.00'}
                />
                </div> 
            </Flex>
          </div>
  
        </Flex>
      </Container>
      
    </div>
  )
}

export default Shop
