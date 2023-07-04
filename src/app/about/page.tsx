import React from 'react'
import Trips from './components/trips';

export const metadata = {
    title: "About", 
};

const page = () => {
  return (
    <div>
        <Trips/>
    </div>
  )
}

export default page