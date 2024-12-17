import React from 'react'
import Image from '../components/Image'
import Badge from '../components/Badge'

const AboutProduct = ({imgSrc,badge}) => {
  return (
    <>
     <Image ImgSrc={imgSrc} className={'w-full'}/>
     <Badge text={badge} className={'absolute bottom-10 left-1/2 -translate-x-1/2 py-5 px-16'}/>
    </>
  )
}

export default AboutProduct
