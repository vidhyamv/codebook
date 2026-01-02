import { ProductCard } from '../../../components'
import useFetch from '../../../hooks/useFetch';

export default function FeaturedProducts() {
  
  // const {products, loading, error} = useFetch(`${import.meta.env.VITE_API_URL}/444/featured_products`);
  const {products, loading, error} = useFetch(`${import.meta.env.VITE_API_URL}/api/featured_products`); //netlify

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  
  return (
    <section className='my-20'>
      <h1 className='mb-5 text-2xl text-center underline font-semibold underline-offset-8 dark:text-slate-100'>Featured eBooks</h1>
      <div className='flex flex-wrap justify-center'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
