'use client'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

export default function page() {
    const userData = useSession()
    return (
        <div>
            {/* cover image */}
            <div className='w-full h-[20vh] mt-2 bg-purple-300 dark:bg-slate-800'>

            </div>
            {/* profile */}
            <div className=' mt-2 p-4 absolute top-[20vh] backdrop-blur-lg rounded-sm border-blue-100 border-2 m-2'>
                <Image src={userData.data?.user?.image} width={150} height={150} alt='profile' className='rounded-sm' />
            </div>
            <div className='bg-white dark:bg-slate-600 h-[22vh] flex flex-col justify-start items-start lg:pl-[15vw] pt-[30vw] px-2'>
                <div className='flex flex-col text-xl font-semibold'>
                    <h1>NameP {userData.data?.user?.name}</h1>
                    <h2>Email {userData.data?.user?.email}</h2>
                </div>
            </div>
        </div>
    )
}
