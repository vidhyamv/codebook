export async function getProduct(id) {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/products/${id}`);
  const data = await response.json();
  return data
}
