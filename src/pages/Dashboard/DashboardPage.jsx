import { useEffect, useState } from "react"
import DashboardList from "./components/DashboardList";
import DashboardEmpty from "./components/DashboardEmpty";
import { getUserOrder } from "../../services";
import useTitle from "../../hooks/useTitle";

export default function DashboardPage() {

  const [orders, setOrders] = useState([]);

  useTitle("Dashboard");

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getUserOrder();
        setOrders(data);
      }
      catch(error) {
        toast.error(error.message, {closeButton: true});
      }
    }
    fetchData()
  },[])

  return (
    <main>
      <section>
        <h1 className="mt-10 mb-5 text-4xl font-bold text-center text-gray-900 dark:text-gray-200">Dashboard</h1>
        {orders.length ? 
        orders.map((order) => (
        <DashboardList key={order.id} order={order} /> )) : <DashboardEmpty />}
      </section>
    </main>
  )
}
