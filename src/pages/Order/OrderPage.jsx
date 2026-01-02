import { useLocation } from 'react-router-dom'
import OrderFail from './components/OrderFail'
import OrderSuccess from './components/OrderSuccess'
import useTitle from '../../hooks/useTitle';

export default function OrderPage() {

  const {state} = useLocation();

  useTitle("Order Summery");

  return (
    <main>
      {state.status ? <OrderSuccess data={state.data} /> : <OrderFail />}
    </main>
  )
}
