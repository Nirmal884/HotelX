"use client"
import { Typography } from '@material-tailwind/react'
import React from 'react'
import RecomendedCard from './cards/recommendedCard'

const Recomended = () => {
  return (
    <div className='container mx-auto flex flex-col gap-4'>
        <Typography variant='h3'>Recommended for you</Typography>
        <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4'>
            <RecomendedCard/>
            <RecomendedCard/>
            <RecomendedCard/>
            <RecomendedCard/>
        </div>
    </div>
  )
}

export default Recomended