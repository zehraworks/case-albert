import React from 'react'

import { Consultant } from './Consultant';
import { Text } from './Text';


export function Consultations() {
  return (
    <div className='flex flex-col mx-8 mt-8 px-1 '>
       <Text/>
       <Consultant/>
       <Consultant/>
    </div>
  )
}
