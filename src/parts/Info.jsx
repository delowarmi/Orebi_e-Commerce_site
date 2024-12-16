import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { PiNumberTwoBold } from "react-icons/pi";
import Heading from '../components/Heading';
import { LiaShippingFastSolid } from "react-icons/lia";
import { FiRotateCcw } from "react-icons/fi";

const Info = () => {
  return (
   <div className='border border-InfoColor'>
    <Container>
        <Flex className={'justify-between items-center py-6'}>
                <div className="w-1/3">
                <Flex className={'gap-x-2 items-center'}>
                <PiNumberTwoBold className='text-[22px]'/>
                <Heading as={'p'} text={'Two years warranty'} className='text-[18px] font-dm font-semibold text-navHColor'/>
                </Flex>
                </div>
                <div className="w-1/3">
                <Flex className={'gap-x-2 items-center'}>
                <LiaShippingFastSolid className='text-[22px]'/>
                <Heading as={'p'} text={'Free shipping'} className='text-[18px] font-dm font-semibold text-navHColor'/>
                </Flex>
                </div>
                <div className="w-1/3">
                <Flex className={'gap-x-2 items-center'}>
                <FiRotateCcw className='text-[22px]'/>
                <Heading as={'p'} text={'Free shipping'} className='text-[18px] font-dm font-semibold text-navHColor'/>    
                </Flex>
                </div>
        </Flex>
    </Container>
    </div>
  )
}

export default Info
