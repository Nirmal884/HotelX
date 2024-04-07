"use client"
import { Button, Input, Typography } from '@material-tailwind/react'
import Image from 'next/image'
import React from 'react'
import flame from "../../../public/fire.png"

const Subscription = () => {
  return (
    <div className='container mx-auto border'>
        <div className='grid grid-cols-2'>
            <div>
                <div className='flex p-3 gap-4 items-center'>
                    <Image src={flame} alt='flame' className='w-10 h-10'/>
                    <div className='flex flex-col'>
                    <Typography variant='h3'>Get access to exclusive deals</Typography><br />
                    <Typography variant='h6'>Sign up for our newsletter and get exclusive deals and discounts</Typography>
                    </div>
                </div>
            </div>
            <div>
            <div className='flex p-3 gap-4 items-center'>
                    <Input size="lg" label="Your email" />
                    <Button variant="gradient" color='red'>Notify</Button>
                </div>
                <p className='pl-4 text-gray-400'>Promise we won{"'"}t spam</p>
            </div>
        </div>
    </div>
  )
}

export default Subscription