import useTitle from '../../hooks/useTitle'
import {Hero, FeaturedProducts, Testimonials, Faq} from './components'

export default function HomePage() {

  useTitle("CodeBook");

  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Testimonials />
      <Faq />
    </main>
  )
}
