import { ProductCard } from '../../components'
import Filter from './components/Filter'
import { useState } from 'react'
import useFetch from '../../hooks/useFetch';
import useTitle from '../../hooks/useTitle';
import { useLocation } from 'react-router-dom';
import { useFilter } from '../../context/FilterContext';

export default function ProductsPage() {

  const [filter, setFilter] = useState(false);
  const {productList} = useFilter();
  // const sortedProducts = sorting(productList);
   const {filteredProducts} = useFilter();
  // const [searchParams] = useSearchParams();
  // const searchTerm = searchParams.get("q"); OR
  
  const search = useLocation().search;
  const searchTerm = new URLSearchParams(search).get("q");

  useTitle('Explore eBook Collection');

  const {products, loading, error} = useFetch(`${import.meta.env.VITE_API_URL}/products${searchTerm ? "?name_like="+searchTerm : ""}`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <main>
      <section className='my-5'>
        <div className='my-5 flex justify-between'>
          <span className='text-2xl font-semibold dark:text-slate-100'>All eBooks ({filteredProducts.length})</span>
          <span>
            <button onClick={() => setFilter(!filter)}  className='inline-flex justify-center items-center p-2 font-medium text-center text-gray-900 text-sm bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700'><i className="bi bi-three-dots-vertical w-6 h-6 inline-flex align-center text-2xl"></i></button>
          </span>
        </div>
        <div className='flex flex-wrap justify-center'>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      {filter && 
        <Filter filter={filter} setFilter={setFilter} />
      }
    </main>
  )
}

