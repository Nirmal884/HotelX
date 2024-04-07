"use client"
import { Typography } from '@material-tailwind/react'
import Image from 'next/image'
import React from 'react'

const ActivityCard = ({img,title,key}) => {
  return (
    <div className='relative'>
        <Image src={img} alt={title} key={key} className='w-96 object-cover rounded-lg'/>
        <Typography variant='h4' className='text-white absolute top-[10%] translate-x-0'>{title}</Typography>
    </div>
  )
}

export default ActivityCard