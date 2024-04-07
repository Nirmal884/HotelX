"use client"
import React from 'react'
import { Typography } from '@material-tailwind/react'
import ActivityCard from './cards/activityCard'
import Hiking from "../../../public/hike.jpg"
import Camping from "../../../public/camp.jpg"
import Surfing from "../../../public/surf.jpg"
import Shoping from "../../../public/shoping.jpg"

const data = [
    {
        id: 1,
        title: 'Go beyond limits',
        image: Hiking
    },
    {
        id: 2,
        title: 'Say yes to new',
        image: Camping
    },
    {
        id: 3,
        title: 'Let the sea set you free',
        image: Surfing
    },
    {
        id: 4,
        title: 'Make it happen',
        image: Shoping
    }
]

const Activities = () => {
  return (
    <div className='container mx-auto flex flex-col gap-4'>
      <Typography variant='h3'>Activities for you</Typography>
      <div className='flex flex-col md:flex-row gap-4'>
      {
        data.map((item) => (
          <ActivityCard key={item.id} img={item.image} title={item.title}/>
        ))
      }
      </div>
    </div>
  )
}

export default Activities