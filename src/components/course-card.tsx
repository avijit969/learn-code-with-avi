import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { Lora } from 'next/font/google'

const loraFont = Lora({ subsets: ['latin'], weight: '700', style: 'normal' })

export default function CourseCard({ name, image, isEnrolled = false }: { name: string, image: string, isEnrolled?: boolean }) {
  return (
    <div className='flex flex-col items-center justify-center gap-4 bg-gray-800 p-4 rounded-lg' >
      <Image src={image} alt={name} width={800} height={300} className='w-full rounded-lg' />
      <p className={`${loraFont.className} text-white lg:text-3xl text-2xl font-semibold`}>{name}</p>
      {isEnrolled ? <Button > Explore </Button> : <Button>Enrol Now</Button>}
    </div>
  )
}
