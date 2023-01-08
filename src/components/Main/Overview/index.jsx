import React from 'react'
import { Content } from './Content'
import { Footer } from './Footer'
import { Title } from './Title'

export function Overview() {
  return (
    <div className="w-4/5 bg-blue-400 rounded-3xl">
      <Title />
      <Content />
      <Footer />
    </div>
  );
}
