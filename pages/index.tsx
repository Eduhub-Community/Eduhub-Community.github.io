import * as React from 'react'

import Hero from '@/components/pages/home/hero'
import Initiatives from '@/components/pages/home/initiatives'
import Events from '@/components/pages/home/events'
import Programs from '@/components/pages/home/programs'
import Images from '@/components/pages/home/images'

export default function Home() {
  return (
    <>
      <Hero />
      <Images />
      <Initiatives />
      <Events />
      <Programs />
    </>
  )
}
