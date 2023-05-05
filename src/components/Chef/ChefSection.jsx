import React from 'react';
import { BeakerIcon } from '@heroicons/react/24/solid'
import { Link, useNavigate } from 'react-router-dom';

const ChefSection = ({ job }) => {

    const { _id, chef_name, chef_photo, year_of_exprience, number_of_recipes, Like, description, } = job;

    return (
        <>

            <div className="card w-full border-solid border-2 border-gray-200 ">
                <img src={chef_photo} alt="" className='  m-4 rounded-lg w-60' />
                <div className="p-4">
                    <h2 className="card-title text-2xl"><span className='text-red-400'>Chef  </span>{chef_name}</h2>
                    <p className='text-gray-700'>{year_of_exprience} Year Of Experience</p>
                    <div className='flex gap-4 items-center text-center my-3 '>

                    </div>
                    <div >
                        <p className='text-gray-700 flex my-2 gap-2'>
                            Number Of Recipes:  {number_of_recipes}
                        </p>
                        <p className='text-gray-700 flex gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>

                            {Like}
                        </p>
                    </div>


                </div>
                <Link to={`/jobdetails/${_id}`} className=" ms-4 mb-3 p-3  rounded-lg btn-info text-white w-32" >
                    View Details
                </Link>

            </div>


        </>
    );
};

export default ChefSection;