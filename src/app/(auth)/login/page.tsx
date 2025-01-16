'use client'
import React from 'react'
import Lottie from 'lottie-react'
import auth from '../../../.././public/lotties/auth.json'
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { handelSignInWithGithub, handleSignInWithGoogle } from '@/lib/auth/signinServerAvction';
export default function page() {
    return (
        <div className='w-full lg:h-screen h-[90vh] flex flex-col justify-center items-center'>
            <div className='w-[80vw] lg:h-[80vh] bg-gray-100 dark:bg-gray-800 rounded-lg flex flex-col justify-center items-center p-4'>
                <h1 className='text-3xl font-extrabold text-gray-800 dark:text-white'>Login To LCWA</h1>
                <div className='flex flex-col justify-between lg:border-2 lg:border-gray-600 mt-4 p-4 rounded-lg'>
                    <Lottie animationData={auth} className='lg:w-[50vw] lg:h-[50vh] w-[85vw] my-4' />
                    <div className='flex flex-col justify-center items-center font-bold gap-4'>
                        <button className='border-2 border-blue-300 p-2 rounded-lg flex justify-center items-center gap-2'
                            onClick={async () => {
                                const res = await handleSignInWithGoogle();
                                console.log(res);
                            }}
                        >
                            Login With Google
                            <FaGoogle />
                        </button>
                        <button className='border-2 border-green-500 p-2 rounded-lg flex justify-center items-center gap-2'
                            onClick={async () => {
                                await handelSignInWithGithub();
                            }}
                        >
                            Login With Github
                            <FaGithub />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
