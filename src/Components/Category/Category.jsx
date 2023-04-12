import React from 'react';

const Category = ({data}) => {
    const {name,picture,title} = data;
    return (
        <div className='flex flex-col justify-center items-start border bg-slate-50 w-full lg:w-64 h-auto px-10 py-4 '>
            <img className='w-10 pt-10' src={picture} alt="" />
            <h2 className='my-2 text-xl'>{name}</h2>
            <p className='pb-10'>{title}</p>
        </div>
    );
};

export default Category;