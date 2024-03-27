import Hero from '@/components/hero'
import PastWork from '@/components/past-work'
import React from 'react'

const page = () => {
  return (
    <main className='grid grid-cols-1 gap-1'>
      <Hero />
      <PastWork />
    </main>
  )
}

export default page