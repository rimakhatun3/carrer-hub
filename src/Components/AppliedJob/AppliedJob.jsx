import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../../utilitis/fakaDb';
import { useLoaderData } from 'react-router-dom';
import ApplyJob from '../ApplyJob/ApplyJob';

const AppliedJob = () => {
    const cartData= useLoaderData()
    const [filterValue,setFilterValue] = useState("all")
    
    let newCart = []
    const cart = getShoppingCart()
    for(const id in cart){
    
        const findData = cartData.find(data=>data.id==id)
    if(findData){
        newCart.push(findData)
    }

}

// useEffect(()=>{
//     const isExists =cartData.filter((product)=>{
    
//         if(filterValue ==='remote'){
//             return product.fulltime
//         }
//         else if(filterValue==='fullTime'){
//             return product.remote
//         }else{
//             product
//         }
      
//     })
// },[newCart])

// console.log(isExists)
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
            
           <div> {newCart.map(data=><ApplyJob key={data.id}  data={data}></ApplyJob>)}</div>
        </div>
    );
};

export default AppliedJob;