import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faLocationPin,faCheck } from '@fortawesome/free-solid-svg-icons'
  import { Link } from 'react-router-dom';
const ApplyJob = ({data}) => {
    console.log(data)
    const {companyLogo,jobTitle,location,salary,remote,fullTime,companyName,id} = data
    return (
        <div>
            <div className='lg:flex justify-between items-center my-10 border rounded-md py-6 px-6'>
               <div className='flex gap-5' >
               <img className='border px-12 rounded-lg bg-slate-200  py-24' src={companyLogo} alt="" />
                <div>
                    <h1 className='text-xl font-bold'>{jobTitle}</h1>
                    <p>{companyName}</p>
                    <div className='flex gap-3 my-5'>
               <button className='border py-2 px-5 text-blue-800'>{remote}</button>
               <button className='border py-2 px-7 text-blue-800'>{fullTime}</button>
            </div>
            <div className='flex gap-3 my-4 '>
                <p><FontAwesomeIcon icon={faLocationPin} /> {location}</p>
                <p> <FontAwesomeIcon icon={faCheck} /> {salary}</p>
            </div>
                </div>
               </div>
               <Link to={`/detail/${id}`}><button className='py-3 px-6 bg-teal-500 rounded-md'>View Details</button></Link>
            </div>
           
        </div>
    );
};

export default ApplyJob;