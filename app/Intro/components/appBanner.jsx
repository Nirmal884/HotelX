"use client"
import { Typography } from '@material-tailwind/react'
import Image from 'next/image'
import React from 'react'
import Banner from "../../../public/Banner.png"

const AppBanner = () => {
  return (
    <div className='container mx-auto '>
        <Image src={Banner} alt='Banner' className=' rounded-lg '/>
    </div>
  )
}

export default AppBanner