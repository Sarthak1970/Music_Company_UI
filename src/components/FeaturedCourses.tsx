'use client'
import React from 'react'
import courseData from "../data/music_courses.json"
import Link from "next/link"
import { BackgroundGradient } from './ui/background-gradient'


interface Course{
        id: number,
        title: string,
        slug: string,
        description: string,
        price: number,
        instructor: string,
        isFeatured: boolean,
}

function FeaturedCourses() {
    const featuredCourses=courseData.courses.filter((course:Course)=>course.isFeatured)

  return (
    <div className='py-12 bg-gray-900'>
        <div className='text-center'>
            <h2 className='text-teal-600 font-semibold tracking-wider'>FEATURED COURSES</h2>
            <p className='text-shadow-emerald-50 font-semibold text-2xl'>Learn With The Best</p>
        </div>
        <div className='text-center mt-20'>
            <Link href={"/courses"}
            className='px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white
            hover:bg-gray-800 hover:text-neutral-100 transition duration-300 ease in font-semibold '>
                View All Courses
            </Link>
        </div>
        <div className='mt-10'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
                {featuredCourses.map((course:Course)=>(
                    <div key={course.id} className='flex justify-center'>
                        <BackgroundGradient
                        className='flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm'>
                            <div className='p-4 sm:p--6 flex flex-col items-center text-center flex-grow'>
                                <p 
                                className='text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200'>{course.title}</p>
                                <p 
                                className='text-sm text-neutral-600 dark:text-neutral-400 flex-grow'>{course.description}</p>
                                <Link 
                                className="my-5"href={`/courses/${course.slug}`}>Learn More</Link>
                            </div>
                        </BackgroundGradient>
                    </div>
                ))}
            </div>

        </div>
    </div>
  )
}

export default FeaturedCourses