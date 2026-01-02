import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginData } from '../services';
import useTitle from "../hooks/useTitle";

export default function Login() {

  const navigate = useNavigate();

  useTitle("Login");

  async function handleLogin(event) {
    event.preventDefault();
    const authDetails = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
    }
    try {
      const data = await loginData(authDetails);
      data.accessToken ? navigate('/products') : toast.error(data);
    }
    catch(error) {
      toast.error(error.message, {closeButton: true});
    }
  }

  return (
    <main>
      <section>
        <h1 className="mt-10 mb-5 text-2xl font-semibold underline text-center text-gray-900 dark:text-gray-200 underline-offset-8">Login</h1>
      </section>
      <form onSubmit={handleLogin}>
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2.5 text-sm font-medium text-heading dark:text-gray-300">Your email</label>
          <input type="email" id="email" className="bg-gray-50 border border-default-medium text-heading text-sm rounded-lg focus:border-brand block w-full px-3 py-2.5 shadow-sm placeholder:text-body dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="name@flowbite.com" required />
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2.5 text-sm font-medium text-heading dark:text-gray-300">Your password</label>
          <input type="password" id="password" className="bg-gray-50 border border-default-medium text-heading text-sm rounded-lg focus:border-brand block w-full px-3 py-2.5 shadow-sm placeholder:text-body dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="••••••••" required />
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-lg text-sm px-4 py-2.5 focus:outline-none">Log In</button>
      </form>
      <button type="submit" className="mt-3 text-white bg-blue-700 hover:bg-blue-800 box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-lg text-sm px-4 py-2.5 focus:outline-none">Login As Guest</button>
    </main>
  )
}
