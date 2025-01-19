import CourseCard from '@/components/course-card'
import React from 'react'

export default function page() {
    const courses = [{
        name: "Full Stack Web Development",
        image: "/images/full-stack.png",
        description: "Learn how to build a full-stack web application using React, Node, Express, and MongoDB."
    }]
    return (
        <div className='p-4'>
            <h1 className='text-3xl font-extrabold text-center my-4'>Explore Our Courses</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {courses.map((course, index) => (
                    <CourseCard key={index} name={course.name} image={course.image} />
                ))}
            </div>
        </div>
    )
}
