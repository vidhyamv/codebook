import { Link } from 'react-router-dom'
import Logo from './../../assets/logo.png'
import { useEffect, useState } from 'react'
import Search from '../Sections/Search';
import DropdownLoggedout from './../Elements/DropdownLoggedout'
import DropdownLoggedIn from '../Elements/DropdownLoggedIn';
import { useCart } from '../../context/CartContext';

export default function Header() {

  const token = sessionStorage.getItem("token");

  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);
  const [search, setSearch] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const {cartList} = useCart();

  // function handleDarkMode(e) {
  //   e.preventDefault();
  //   setDarkMode(!darkMode);
  //   if(darkMode) {
  //     document.documentElement.classList.add("dark");
  //   }
  //   else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }

  useEffect(() => {
    if(darkMode) {
      document.documentElement.classList.add("dark");
    }
    else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("darkMode", JSON.stringify(darkMode))
    
  },[darkMode])

  return (
    <header className="w-full z-20">
      <nav className="bg-white dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl py-3 px-6 border-b border-slate-200 dark:border-b-0 dark:text-white">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse outline-none">
            <img src={Logo} className="h-10" alt="CodeBook Logo" />
            <span className="self-center text-2xl text-heading font-semibold whitespace-nowrap">CodeBook</span>
          </Link>
          <div className="relative flex items-center space-x-5 rtl:space-x-reverse">
            <a onClick={() => setDarkMode(!darkMode)} href="#" className="text-xl  text-body hover:underline"><i className="bi bi-gear-wide-connected"></i></a>
            <a onClick={() => setSearch(!search)} href="#" className="text-xl font-medium text-fg-brand hover:underline"><i className="bi bi-search"></i></a>
            <Link to="/cart" className="text-2xl font-medium text-fg-brand hover:underline">
              <i className="bi bi-cart-fill relative"><span className='bg-rose-500 text-white text-sm rounded-full absolute top-1 left-2.5 px-1 not-italic'>{cartList.length}</span></i>
            </Link>
            <span onClick={() => setDropdown(!dropdown)} className="text-2xl font-medium text-fg-brand hover:underline cursor-pointer">
              <i className="bi bi-person-circle"></i>
            </span>
            {dropdown && (token ? <DropdownLoggedIn setDropdown={setDropdown} /> : <DropdownLoggedout setDropdown={setDropdown} />)}
          </div>
        </div>
      </nav>
      {search && 
        <Search />
      }
    </header>
  )
}
