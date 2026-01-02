import { Route, Routes } from 'react-router-dom'
import { Cart, Dashboard, Home, Login, Order, ProductDetail, Products, Register, PageNotFound } from '../pages'
import ProtectedRoute from './ProtectedRoute'

export function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="products" element={<Products />} />
      <Route path="product/:id" element={<ProductDetail />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
      <Route path="order" element={<Order />} />
      <Route path="dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}
