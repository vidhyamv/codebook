import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Rating } from '../components';
import useTitle from '../hooks/useTitle';
import { useCart } from '../context/CartContext';
import { getProduct } from '../services';

export default function ProductDetail() {

  const [product, setProduct] = useState({});
  const {addCart, cartList, removeCart} = useCart();
  const [inCart, setInCart] = useState(false);
  const {id} = useParams();

  useTitle(product.name);

  useEffect(() => {
    async function fetchdata() {
      try {
        const data = await getProduct(id)
        setProduct(data);
      }
      catch(error) {
        toast.error(error.message, {closeButton: true});
      }
    }
    fetchdata();
  },[]);

  useEffect(() => {
    const updateProduct = cartList.find((item) => item.id == product.id);
    if(updateProduct) {
      setInCart(true);
    }
    else {
      setInCart(false);
    }
  },[cartList, product.id])

  return (
    <main>
      <section>
        <h1 className="mt-10 mb-5 text-4xl font-bold text-center text-gray-900 dark:text-gray-200">{product.name}</h1>
        <p className='mb-3 text-center text-lg text-gray-900 dark:text-slate-200'>{product.overview}</p>
        <div className="flex flex-wrap justify-around">
          <div className='max-w-xl my-3'>
            <img className="rounded" src={product.image_local} alt={product.name} />
          </div>
          <div className="max-w-xl my-3">
            <p className="text-3xl font-bold text-gray-900 dark:text-slate-200">$ {product.price}</p>
            <p className="my-3 text-body"><Rating rating={product.rating} /></p>
            <p className="my-4 text-body font-semibold">
              {product.best_seller && (<span className='bg-amber-50 border rounded-lg text-amber-500 px-3 py-1 mr-2'>BEST SELLER</span>)}
              {product.in_stock ? (<span className='bg-slate-100 border rounded-lg text-emerald-600 px-3 py-1 mr-2'>INSTOCK</span>) : (<span className='font-semibold text-rose-700 border bg-slate-100 rounded-lg px-3 py-1 mr-2'>OUT OF STOCK</span>)}
              <span className='font-semibold text-blue-500 border bg-slate-100 rounded-lg px-3 py-1 mr-2'>{product.size} MB</span>
            </p>
            <p className='my-3'>
              {!inCart && (<button onClick={() => addCart(product)} type="button" className={`inline-flex items-center text-white bg-blue-700 hover:bg-brand-strong box-border border border-transparent shadow-xs font-medium leading-5 rounded-lg hover:bg-blue-800 text-base px-3 py-2 focus:outline-none ${product.in_stock ? "":"cursor-not-allowed"}`} disabled={!product.in_stock}>
                <svg className="w-5 h-5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/></svg>
                Add to cart
              </button>)}
              {inCart && (<button onClick={() => removeCart(product)} type="button" className={`inline-flex items-center text-white bg-red-600 rounded-lg hover:bg-red-800 box-border border border-transparent shadow-xs font-medium leading-5 rounded-lg hover:bg-blue-800 text-base px-3 py-2 focus:outline-none ${product.in_stock ? "":"cursor-not-allowed"}`} disabled={!product.in_stock}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3 me-1.5" viewBox="0 0 16 16">
                  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                </svg> Remove Item 
              </button>)}
            </p>
            <div>
              <p className='text-lg text-gray-900 dark:text-slate-200'>{product.long_description}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
