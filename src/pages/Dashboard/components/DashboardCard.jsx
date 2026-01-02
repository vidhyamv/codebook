import { Link } from 'react-router-dom'

export default function DashboardCard({product}) {
  return (
    <div key={product.id} className="flex flex-wrap justify-between max-w-4xl m-auto p-2 my-5 ">
      <div className="flex">
        <Link to={`/product/${product.id}`}>
          <img className="w-32 rounded" src={product.poster} alt={product.name} />
        </Link>
        <div className="">
          <Link to={`/product/${product.id}`}>
            <p className="text-lg ml-2 dark:text-slate-200">{product.name}</p>
          </Link>
          <div className="text-lg m-2 dark:text-slate-200">
            <span>${product.price}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
