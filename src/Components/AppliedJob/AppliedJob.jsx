import React from 'react';
import { getShoppingCart } from '../../utilitis/fakaDb';
import { useLoaderData } from 'react-router-dom';
import ApplyJob from '../ApplyJob/ApplyJob';

const AppliedJob = () => {
    const CartData= useLoaderData()
    let newCart = []
    const cart = getShoppingCart()
    for(const id in cart){
    
        const findData = CartData.find(data=>data.id==id)
    if(findData){
        newCart.push(findData)
    }
    console.log(newCart)
}
    return (
        <div>
            <h1 className='text-xl font-bold bg-slate-50 py-14 '>Applied Jobs</h1>
           <div> {newCart.map(data=><ApplyJob key={data.id} data={data}></ApplyJob>)}</div>
        </div>
    );
};

export default AppliedJob;