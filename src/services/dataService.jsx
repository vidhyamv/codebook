function getSession() {
  const token = sessionStorage.getItem("token");
  const userID = sessionStorage.getItem("userId");
  return {token, userID}
}

export async function getUser() {
  const session = getSession();
  const response = await fetch(`${import.meta.env.VITE_API_URL}/users/${session.userID}`,
  {
    method: "GET",
    headers: {"Content-Type": "application/json", Authorization: `Bearer ${session.token}`}
  }
  )
  if (!response.ok) {
    console.error("Unauthorized");
    return;
  }
  const data = await response.json();
  return data
}

export async function createOrder(orderDetail) {
  const session = getSession();
  
  const header = {
    method: "POST",
    headers: {"content-Type": "application/json", Authorization: `Bearer ${session.token}`},
    body: JSON.stringify(orderDetail)
  }
  const response = await fetch(`${import.meta.env.VITE_API_URL}/orders`,header);
  const data = await response.json();
  return data
}

export async function getUserOrder() {
  const session = getSession();
  const response = await fetch(`${import.meta.env.VITE_API_URL}/orders?user.id=${session.userID}`,
  {
    method: "GET",
    headers: {"Content-Type": "application/json", Authorization: `Bearer ${session.token}`}
  }
  );
  const data = await response.json();
  return data
}
