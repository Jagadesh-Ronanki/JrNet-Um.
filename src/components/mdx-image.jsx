import React from 'react'
import Image from 'next/image'

export function MdxImage(props) {
  return <Image {...props} className='mx-auto w-full mb-6 h-auto max-h-[90vh] transition-transform rounded-lg max-w-full duration-500 hover:scale-[1.02] hover:cursor-pointer hover:duration-200' alt={props.alt} />;
}
