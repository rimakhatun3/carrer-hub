import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';
import { useLoaderData } from 'react-router-dom';
import Features from '../Features/Feature';
import Feature from '../Features/Feature';

const Home = () => {
    const features = useLoaderData()
    // console.log(features)
    const [category,setCategory] = useState([])
    useEffect(()=>{
        fetch('Data.json')
        .then(res=>res.json())
        .then(data=>setCategory(data))
    },[])
    return (
        <div >
           <section className='flex justify-between items-center bg-slate-50 px-24 pt-10'>
           <div className='text-left'>
                <h2 className='text-3xl font-extrabold mb-10'>One Step <br /> Closer To Your <br /> <span className='text-teal-300'>Dream Job</span> </h2>
                <p className='mb-10'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                <button className='py-3 px-6 bg-teal-500 rounded-md'>Get Started</button>
            </div>
            <img className='w-96 h-auto' src="https://i.ibb.co/D8LC6yj/P3-OLGJ1-copy-1.png" alt="" />
           </section>
           <section className='mt-20'>
            <h2 className='text-2xl font-bold mb-5'>Job Category List</h2>
            <p className='text-stone-500 mb-10'>Explore thousands of job opportunities with all the information you need. Its your future</p>

           <div className='grid grid-cols-4 mt-5 gap-5'>
{
    category.map(data=><Category key={data.id} data={data}></Category>)
}
           </div>
           </section>

           <section className='mt-20'>
            <h2 className='text-2xl font-bold mb-5'>Featured Jobs</h2>
            <p className='text-stone-500 mb-10'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid grid-cols-2 gap-10'>
                {
                    features&& features.slice(0,4).map(feature=><Feature key={feature.id} feature={feature}></Feature>)
                }
            </div>
           </section>
        </div>
    );
};

export default Home;