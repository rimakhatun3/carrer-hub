import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToDb } from '../../utilitis/fakaDb';

const ViewDetails = () => {
    const [items,setItems] = useState({})
    const id = useParams()
    const details = useLoaderData()
    const [cart,setCart] = useState([])
    console.log(cart)
    
    useEffect(()=>{
        
        if(details){
            const findData = details.find(detail=>detail.id==id.Id)
            setItems(findData)
        }
    },[])
    const addToCart =(product)=>{
        let newCart = [];
        // const newCart = [...cart, product];
        // if product doesn't exist in the cart, then set quantity = 1
        // if exist update quantity by 1
        const exists = cart.find(pd => pd.id === product.id);
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product]
        }
        else {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists];
        }

        setCart(newCart)
        addToDb(product.id);
        console.log(cart)
    }
// console.log(items)
    return (
        <div>
            <h1 className='bg-slate-50 text-xl font-bold py-10'>Job Details</h1>
            <div className='grid lg:grid-cols-6 gap-5 mt-10'>
                <div className='lg:col-span-4'>
                    <p className='mb-5'><span className='text-xl font-semibold'>Job Description</span>:{items.jobDescription}</p>
                    <p className='mb-5'><span className='text-xl font-semibold'>Job Responsibility</span>:{items.jobResponsibility}</p>
                    <p className='text-xl font-semibold  mb-5 text-left'>EducationalRequirements:</p>
                    <p className='mb-5' >{items.jobResponsibility}</p>
                    <p className='text-xl font-semibold text-left mb-5'>Experiences:</p>
                    <p className='text-left mb-5'>{items.Experiences}</p>
                    
                    </div>
                <div className='lg:col-span-2 bg-slate-50 py-10 px-5 rounded-md'>
                    <h1 className='text-xl font-semibold mb-5'>Job Details</h1>
                    <p className='mb-5'><span className='text-xl font-semibold'>Salary</span>:{items.salary}</p>
                    <p className='mb-5'><span className='text-xl font-semibold'>Job Title</span>:{items.jobTitle}</p>
                    <h1 className='text-xl font-semibold'>Contact Information</h1>
                    <p className='mb-5'><span className='text-xl font-semibold'>Phone</span>:{items.phone}</p>
                    <p className='mb-5'><span className='text-xl font-semibold'>Email</span>:{items.email}</p>
                    <p className='mb-5'><span className='text-xl font-semibold'>Address</span>:{items.address}</p>
                    <button onClick={()=>addToCart(items)} className='py-3 px-6 bg-teal-200 w-72 rounded-md'>Apply Now</button>
                </div>
                
            </div>
        </div>
    );
};

export default ViewDetails;