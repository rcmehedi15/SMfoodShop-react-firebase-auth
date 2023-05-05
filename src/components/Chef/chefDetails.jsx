import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const chefDetails = () => {
    const jobs = useLoaderData();
    const {jobId} = useParams();
    const findData = jobs.find(info => info._id === jobId)
    const { _id, chef_name, chef_photo, year_of_exprience, number_of_recipes, Like, description, } = findData;
    return (
        <div>
            <h1 className='text-center font-bold mt-4'>Job Details </h1>
            <div className='container mx-auto flex justify-between mt-8'>
                <div className='w-full'> 
                          <h1><span className='font-bold'>Experiences: </span>{chef_name}</h1>
                </div>
                <div className='bg-slate-300 p-12 rounded-md w-96 '>
                   
                         <Link to='/jobapply' className='mt-4 p-4 rounded-lg btn-info text-white'>Apply Now</Link>

                </div>
            </div>
        </div>
    );
};

export default chefDetails;