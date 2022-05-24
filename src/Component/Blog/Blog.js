import React from 'react'

const Blog = () => {
  return (
    <div className='container mx-auto my-14 grid grid-cols-1 lg:grid-cols-2'>
        <div>
        <h1 className='text-3xl'>Improve the performance of a React Application</h1>
        <p className='mt-5'>If you’re benchmarking or experiencing performance problems in your React apps, make sure you’re testing with the minified production build.</p>
        <p className='mt-2'>
        By default, React includes many helpful warnings. These warnings are very useful in development. However, they make React larger and slower so you should make sure to use the production version when you deploy the app.
        </p>
        <ol className='mt-4 list-decimal ml-5'>
            <li> Keeping component state local where necessary.</li>
            <li> Memoizing React components to prevent unnecessary re-renders.</li>
            <li> Code-splitting in React using dynamic import()</li>
            <li> Windowing or list virtualization in React.</li>
            <li> Lazy loading images in React.</li>
        </ol>
        </div>

    </div>
  )
}

export default Blog