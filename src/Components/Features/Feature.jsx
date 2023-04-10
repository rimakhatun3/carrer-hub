import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faLocationPin,faCheck } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const Feature = ({feature}) => {
    const {companyLogo,companyName,fullTime,jobTitle,location,remote,salary,id} = feature
    return (
        <div className='flex flex-col justify-center items-start border  py-8 ps-10 mx-0 rounded-md'>
            <img src={companyLogo} alt="" />
            <p className='my-2'>{jobTitle}</p>
            <p className='my-4'>{companyName}</p>
            <div className='flex gap-3'>
               <button className='border py-2 px-5'>{remote}</button>
               <button className='border py-2 px-7'>{fullTime}</button>
            </div>
            <div className='flex gap-3 my-4 '>
                <p><FontAwesomeIcon icon={faLocationPin} /> {location}</p>
                <p> <FontAwesomeIcon icon={faCheck} /> {salary}</p>
            </div>
            <Link to={`/detail/${id}`}><button className='py-3 px-6 bg-teal-500 rounded-md'>View Details</button></Link>
        </div>
    );
};

export default Feature;