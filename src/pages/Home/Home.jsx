import React from 'react';
import banner from '../../assets/home2.jpg'
import Courses from '../Courses/Courses';

const Home = () => {
    return (
        <div className='w-11/12 mx-auto mt-28'>
            <section className='flex justify-evenly items-center'>
                <div className='w-1/2'>
                    <h2 className='text-5xl'>মজার শিক্ষাগুরু, মজায় শেখা শুরু</h2>
                    <h2 className='mt-12 text-2xl leading-10'> বাংলাদেশের অন্যতম সেরা ই-লার্নিং প্লাটফর্ম, কাজ করছে শিশুদের গাণিতিক দক্ষতা, মানসিক দক্ষতা, প্রযুক্তিগত দক্ষতা ও ভাষাগত দক্ষতা বৃদ্ধি করতে। আনন্দের ছলে মানসম্মত শিক্ষা নিশ্চিত করাই আমাদের লক্ষ্য। </h2>
                </div>
                <div className=''>
                    <img src={banner} alt="banner" />
                </div>
            </section>
            
            <Courses></Courses>
        </div>
    );
};

export default Home;