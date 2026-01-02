import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="w-full shadow dark:bg-gray-800">
      <div className='p-4 mx-auto max-w-screen-xl md:flex md:items-center md:justify-between md:p-6'>
        <span className="text-sm text-body text-gray-500 dark:text-gray-400 sm:text-center">© 2030 <Link to="/" className="hover:underline">CodeBook</Link>. All Rights Reserved.
        </span>
        <div className="flex mt-4 sm:justify-center md:mt-0 space-x-6 rtl:space-x-reverse">
          <a href="/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white text-body hover:text-heading">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white text-body hover:text-heading ms-5">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white text-body hover:text-heading ms-5">
            <i className="bi bi-github"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}
