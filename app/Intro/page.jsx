import React from 'react'
import Banner from './components/banner'
import AppBanner from './components/appBanner'
import Recomended from './components/recomendation'
import Activities from './components/activities'
import Subscription from './components/subscription'

const HomePage = () => {
  return (
    <div className='flex flex-col gap-[5rem]'>
        <Banner/>
        <AppBanner/>
        <Recomended/>
        <Activities/>
        <Subscription/>
        <br />
        <br />
        <br />
        <hr />
        footer
    </div>
  )
}

export default HomePage