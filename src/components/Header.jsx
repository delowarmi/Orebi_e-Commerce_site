import React from 'react'
import Flex from '../components/Flex'
import Container from '../components/Container';
import { FaSearch ,FaUser ,FaSortDown,FaShoppingCart} from "react-icons/fa";
import Category from '../components/Category';
import User from './User';

const Header = () => {
  return (
    <div className='bg-subnavColor py-5'>
      <Container>
      <Flex>
        <div className="w-[20%] pt-2">
        <Category/>
        </div>
        <div className="w-[60%] relative">
          <input type="text"className='className = p-3 bg-white rounded-lg w-full'placeholder='Search Products' />
          <FaSearch className='absolute right-4 top-1/2 -translate-y-1/2'/>
        </div>
        <div className="w-[20%] pt-2">
        <Flex className={'justify-end'}>
                <User/>
                <FaSortDown className='ml-1'/>
                <FaShoppingCart className='ml-7'/>   
        </Flex>
        </div>
      </Flex>
      </Container>
    </div>
  )
}

export default Header
