import Image from 'next/image'
import React from 'react'

const Logo = (props: {size: number, textSize: string}) => {
  return (
    <div className='flex'>
      <p className={`${props.textSize} font-bold`}>Fu</p>
        <Image
          src='/fuzzieLogo.png'
          width={props.size}
          height={props.size}
          alt='fuzzie logo'
          className='shadow-sm'
        />
        <p className={`${props.textSize} font-bold`}>zie</p>
    </div>
  )
}

export default Logo