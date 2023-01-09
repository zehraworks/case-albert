import React from 'react'
import { Content } from './Content'
import { Footer } from './Footer'
import { Title } from './Title'

export function Overview() {
  return (
    <div className="w-4/5 bg-gray-100 rounded-3xl">
      <Title />
      <Content />
      <hr className='mb-4 mx-8'/>
      <Footer />
    </div>
  );
}
