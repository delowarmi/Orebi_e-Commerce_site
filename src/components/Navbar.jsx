import React from 'react'
import Logo from '../assets/Logo.png'
import Flex from '../components/Flex'
import { Link } from 'react-router-dom'
import Container from '../components/Container'

const Navbar = () => {
  return (
    <div className='py-8'>
        <Container>
         <Flex>
        <div className="w-[40%]">
                <img src={Logo} alt="" />
        </div>
        <div className="w-[60%]">
                <ul>
                <Flex className={"gap-x-10"}>
                        <Link to='/'><li className='font-dm text-navColor hover:text-navHColor hover:font-bold'>Home</li></Link>
                        <Link to='/shop'><li className='font-dm text-navColor hover:text-navHColor hover:font-bold'>Shop</li></Link>
                        <Link to='/about'><li className='font-dm text-navColor hover:text-navHColor hover:font-bold'>About</li></Link>
                        <Link to='/contact'><li className='font-dm text-navColor hover:text-navHColor hover:font-bold'>Contact</li></Link>
                        <Link to='/jurnal'><li className='font-dm text-navColor hover:text-navHColor hover:font-bold'>Jurnal</li></Link>
                        
                </Flex>

                </ul>
        </div>
        
        </Flex>
        </Container>
      
    </div>
  )
}

export default Navbar
