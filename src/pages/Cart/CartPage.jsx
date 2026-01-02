import { useCart } from '../../context/CartContext';
import useTitle from '../../hooks/useTitle';
import { CartEmpty, CartList } from './components';

export default function CartPage() {

  const {cartList} = useCart();

  useTitle("Cart");

  return (
    <main>
      {cartList.length ? <CartList cartList={cartList} /> : <CartEmpty />}
    </main>
  )
}
