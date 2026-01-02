import HeroImg from './../../../assets/images/hero.avif';
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section>
      <div className="flex flex-col items-center bg-neutral-primary-soft lg:flex-row dark:text-slate-100">
        <div className="my-5 flex flex-col justify-between leading-normal">
          <h1 className="text-5xl font-bold tracking-tight text-heading">The Ultimate eBook Store</h1>
          <p className="my-7 px-1 text-2xl">CodeBook is the world's most popular and authoritative source for computer science ebooks. Find ratings and access to the newest books digitally.</p>
          <div>
            <Link to="/products" type="button" className="inline-flex items-center w-auto text-body text-white bg-blue-700 box-border hover:bg-blue-800 hover:text-heading shadow-xs font-medium leading-5 rounded-lg text-base px-5 py-2.5 focus:outline-none">
              Explore eBooks
              <svg className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
            </Link>
          </div>
        </div>
        <div className='my-5 lg:max-w-xl'>
          <img className="rounded-lg max-h-full object-cover w-full md:h-auto mb-4 md:mb-0" src={HeroImg} alt="Hero" />
        </div>
      </div>
    </section>
  )
}
