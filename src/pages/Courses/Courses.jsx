import React, { useEffect, useState } from 'react';
import CourseCard from '../CourseCard/CourseCard';

const Courses = () => {
    const [cardData, setCardData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/get-courses")
        .then((res) => res.json())
        .then((data) => setCardData(data))
    }, [])

    console.log(cardData);
    return (
        <div className='mt-48 w-4/5 mx-auto'>
            <h2 className='text-5xl text-center mb-20'>মজারুর কোর্স</h2>
            <div className="grid grid-cols-3 gap-12">
                {cardData.map((data, idx) => <CourseCard key={idx} data={data}></CourseCard>)}
            </div>
        </div>
    );
};

export default Courses;