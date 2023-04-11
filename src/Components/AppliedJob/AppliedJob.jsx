import React, { useState } from 'react';
import { getShoppingCart } from '../../utilitis/fakaDb';
import { useLoaderData } from 'react-router-dom';
import ApplyJob from '../ApplyJob/ApplyJob';

const AppliedJob = () => {
    const CartData= useLoaderData()
    const [filterValue,setFilterValue] = useState("all")
    
    let newCart = []
    const cart = getShoppingCart()
    for(const id in cart){
    
        const findData = CartData.find(data=>data.id==id)
    if(findData){
        newCart.push(findData)
    }
    // console.log(newCart)

}

const isExists =newCart.filter((product)=>{
    console.log(product)
    if(filterValue ==='remote'){
        return product.fulltime
    }
    else if(filterValue==='fullTime'){
        return product.remote
    }else{
        product
    }
})
const handleFilterValue=(event)=>{
setFilterValue(event.target.value)
}
return (
        <div>
            <h1 className='text-xl font-bold bg-slate-50 py-14 '>Applied Jobs</h1>
            <div className='mt-10 text-end'>
            <select onChange={handleFilterValue} className="select select-bordered w-full max-w-xs">
  <option >all</option>
  <option>remote</option>
  <option>onsite</option>
</select>
            </div>
            
           <div> {newCart.map(data=><ApplyJob key={data.id} isExists={isExists} data={data}></ApplyJob>)}</div>
        </div>
    );
};

export default AppliedJob;