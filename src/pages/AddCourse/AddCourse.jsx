import React, { useEffect, useRef, useState } from 'react';
import {FcPlus} from 'react-icons/fc';

const AddCourse = () => {
    const [imageUrl, setImageUrl] = useState(null);
    const [title, setTitle] = useState("");
    const [classNumber, setClassNumber] = useState('');
    const [courseType, setCourseType] = useState('');
    // console.log(image, title, classNumber, courseType);

    const cloudinaryRef = useRef();
    const widgetRef = useRef();
  
    useEffect(() => {
      cloudinaryRef.current = window.cloudinary;
  
      widgetRef.current = cloudinaryRef.current.createUploadWidget({
        cloudName: "dbc7aucky",
        uploadPreset: "insertAudio"
      }, function(error, result){
          if(!error && result && result.event === "success"){
            setImageUrl(result.info.secure_url);
          }
      });
  
  
    }, [])

    const addCourseHandler = () => {
        const courseAllInfo = {
            imageUrl,
            title,
            classNumber,
            courseType,
        }
        console.log(courseAllInfo);
        fetch("http://localhost:5000/add-course", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(courseAllInfo),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            })
            .catch((er) => console.log(er));
    }

    return (
        <div className='w-1/3 mx-auto mt-36  border py-12 rounded-lg'>
            <from>
                <div>
                <button onClick={() => widgetRef.current.open()}
                    className="flex justify-center items-center px-16 py-4 font-semibold border-solid border-2 border-blue-400 p-2 rounded-lg hover:border-red-200 hover:bg-[#1C1E25] hover:text-blue-400 bg-blue-100 text-gray-600 shadow-lg shadow-cyan-500/50 w-full max-w-xs  mx-auto">
                    <FcPlus className=" mr-3 text-3xl"></FcPlus>Select Image
                </button>
                </div>
                <div className='mt-10'>
                    <label className='block text-center'>Add Course Title</label>
                    <input onChange={(e) => {setTitle(e.target.value)}} type="text" placeholder="Course Title" className="input input-bordered w-full max-w-xs block mx-auto mt-3" />
                </div>
                <div className='mt-10'>
                    <label className='block text-center'>Total Live Class</label>
                    <input onChange={(e) => {setClassNumber(e.target.value)}} type="text" placeholder="0 Live Classes" className="input input-bordered w-full max-w-xs block mx-auto mt-3" />
                </div>
                <div className='mt-10'>
                    <label className='block text-center'>Choose Course Type</label>
                    <select value={courseType} onChange={(e) => setCourseType(e.target.value)} className="select select-bordered w-full max-w-xs block mx-auto mt-3">
                        <option disabled selected>Choose Course Type</option>
                        <option>recorded</option>
                        <option>Live</option>
                    </select>
                </div>
                <div className='mt-10'>
                    <button onClick={addCourseHandler} className=' input input-bordered w-full max-w-xs block mx-auto cursor-pointer rounded-lg bg-blue-500 text-white'>Add</button>
                </div>
            </from>
        </div>
    );
};

export default AddCourse;