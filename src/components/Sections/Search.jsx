import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Search() {

  const searchRef = useRef();
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    navigate(`/products?q=${searchRef.current.value}`);
  }

  return (
    <div className='max-w-screen-xl mx-auto my-5 p-2'>
      <form onSubmit={handleSearch} className="flex items-center">   
        <label htmlFor="simple-search" className="sr-only">Search</label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-5 h-5 font-medium" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/></svg>
          </div>
          <input ref={searchRef} type="text" id="simple-search" className="pl-10 p-2.5 bg-gray-50 dark:bg-gray-700 border dark:border-gray-600 rounded-lg ps-9 text-heading text-sm focus:ring-blue-500 focus:border-blue-500 block w-full placeholder:text-body" placeholder="Search" required />
        </div>
        <button type="submit" className="inline-flex ml-2 items-center justify-center shrink-0 text-white bg-blue-700 hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs rounded-lg w-10 h-10 focus:outline-none hover:bg-blue-800">
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/></svg>
          <span className="sr-only">Icon description</span>
        </button>
      </form>
    </div>
  )
}
