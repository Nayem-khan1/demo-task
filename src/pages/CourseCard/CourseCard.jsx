import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({data}) => {
    const {classNumber, courseType, imageUrl, title} = data;
    console.log(data)
    return (
        <div>
            <Link to="" aria-label='View Item' className='bg-gray-200 block p-4 rounded'>
                <div className='relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl'>
                    <img
                        className='object-cover w-full h-56 md:h-64 xl:h-80'
                        src={imageUrl}
                        alt=''
                    />
                    <div className='absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100'>
                        <button className='mt-4 text-lg font-bold text-gray-100 bg-black/40 px-4 py-2 rounded-lg'>Enroll Now</button>
                        
                    </div>
                </div>
                <h2 className='text-3xl pl-7 mt-12'>{title}</h2>
                <div>
                    <p className='text-lg pl-7 mt-7'>Total Live Class <span>{classNumber}</span></p>
                    <p className='text-lg pl-7 mt-4'>Course Type <span>{courseType}</span></p>
                </div>
            </Link>
            
        </div>
    );
};

export default CourseCard;