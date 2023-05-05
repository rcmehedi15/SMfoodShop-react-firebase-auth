import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const chefDetails = () => {
    const jobs = useLoaderData();
    const { jobId } = useParams();
    const findData = jobs.find(info => info._id === jobId)
    const { _id, chef_name, chef_photo, year_of_exprience, number_of_recipes, Like, description, } = findData;
    return (
        <>

            <h1 className='text-center font-bold mt-4 bg-slate-500 p-5 text-white container rounded-lg mx-auto'>Chef Details </h1>
            <div className='container mx-auto flex justify-between mt-8'>
                <div className="card w-full border-solid border-2 border-gray-200 ">

                    <div className='flex gap-5'>
                        <img className='m-4 rounded-lg w-60' src={chef_photo} alt="" />
                         <div className='my-8'>
                         <p className=' my-4 text-2xl'><span className=' text-blue-500'>Chef </span>{chef_name}</p> 
                         <p> {year_of_exprience} Year Of Exprience</p>
                         <p>{number_of_recipes} Number Of Recipes </p>
                        
                        <p className='flex gap-2'>  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg> {Like} </p>
                       <br />
                         <p > <span className='p-2 bg-blue-500 rounded-md text-white'>Short Description </span> <br /> <br /> <span>{description}</span></p>
                         
                         <br />
                         <button className='p-2 bg-green-500 rounded-md text-white w-20' >Favourite </button>
                         </div>
                    </div>
                       

                </div>


            </div>

        </>
    );
};

export default chefDetails;