import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ViewDetails = () => {
    const [items,setItems] = useState({})
    const id = useParams()
    const details = useLoaderData()
    
    useEffect(()=>{
        
        if(details){
            const findData = details.find(detail=>detail.id==id.Id)
            setItems(findData)
        }
    },[])
console.log(items)
    return (
        <div>
            <h1 className='bg-slate-50 text-xl font-bold py-10'>Job Details</h1>
            <div>
                <div>
                    <p><span className='text-xl font-semibold'>Job Description</span>:{items.jobDescription}</p>
                    
                    </div>
                <div></div>
            </div>
        </div>
    );
};

export default ViewDetails;