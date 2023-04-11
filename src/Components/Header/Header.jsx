import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='flex justify-between items-center mx-auto bg-slate-50 py-4 px-6'>
            <div>
<h2 className='text-2xl font-bold lg:ps-20'>JOBSHUBS</h2>
    
    </div>

    <nav className='haeder'>
    <Link to='/'>Home</Link>
    <Link to='/statis'>Statistics</Link>
            <Link to='/apply'>Applied Jobs</Link>
            <Link to='/blog'>Blog</Link>
            
        </nav> 
        <button className='py-3 px-6 bg-teal-500 rounded-md'>Star Applying</button>
        </div>
    );
};

export default Header;