import React from 'react'
import ProjectSlider from '@/components/ProjectSlider'

const Page = () => {
    return (
        <div className='flex items-center justify-center gap-5 flex-col md:flex-row h-screen bg-[#0c011a]'>
            <div className='flex flex-col gap-3'>
                <h1 className='text-[50px] text-white font-semibold'>
                    My Work<span className='text-red-500'>.</span>
                </h1>
                <p className='max-w-[400px] text-[16px] text-gray-200 md:text-gray-400'>
                    Here are some of my first mini projects.
                    Some were done in teams with classmates.
                </p>
            </div>

            <ProjectSlider />
        </div>
    )
}

export default Page