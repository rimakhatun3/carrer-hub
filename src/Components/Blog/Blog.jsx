import React from 'react';

const Blog = () => {
    return (
        <div className='mt-8 mx-0'>
            <h1 className='font-semibold text-lg my-2'>1.When to Use Context Api?</h1>
            <p>Answer:Context is primarily used when some data needs to be accessible by many components at different nesting levels.If I want to avoid passing some props through many levels, component composition is often a simpler solution than context.</p>
            <h1>2.What is React Custom Hook?</h1>
            <p>Answer:Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications.</p>
            <h1>3.What is useRef?</h1>
            <p>Answer: The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
            <h1>4.What is UseMemo?</h1>
            <p>Answer: React has a built-in hook called useMemo that allows you to memoize expensive functions so that you can avoid calling them on every render. You simple pass in a function and an array of inputs and useMemo will only recompute the memoized value when one of the inputs has changed.</p>
        </div>
    );
};

export default Blog;