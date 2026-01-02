export async function getProduct(id) {
  // const response = await fetch(`${import.meta.env.VITE_API_URL}/444/products/${id}`);
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/products/${id}`);
  const data = await response.json();
  return data
}
