import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../../context/cartContext';
import { useEffect, useState } from 'react'
import { getUser, logout } from '../../services';


export default function DropdownLoggedIn({setDropdown}) {

  const navigate = useNavigate();
  const {clearCart} = useCart();
  const [user, setUser] = useState({});

  function handleLogout() {
    logout();
    clearCart();
    setDropdown(false);
    navigate('/')
  }

  useEffect(() => {
    async function getData() {
      try {
        const data = await getUser();
        setUser(data);
      }
      catch(error) {
        toast.error(error.message, {closeButton: true});
      }
    }
    getData();
  },[])
  // console.log(user)

  return (
     <div id="dropdown" className="absolute top-10 right-0 z-10 bg-white border border-default-medium rounded shadow w-44 dark:bg-gray-700 dark:border-gray-700">
      <div className='py-3 px-4 text-sm text-gray-900 dark:text-white'>
        <div className='font-medium truncate'>{user.email}</div>
      </div>
      <ul className="py-1 text-sm text-gray-700 dark:text-gray-200 font-medium" aria-labelledby="dropdownDefaultButton">
        <li>
          <Link onClick={() => setDropdown(false)} to="/products" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">ALL eBooks</Link>
        </li>
        <li>
          <Link onClick={() => setDropdown(false)} to="/dashboard" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
        </li>
        <li>
          <span onClick={handleLogout} className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">LogOut</span>
        </li>
      </ul>
    </div>
  )
}
