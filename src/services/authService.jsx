import { jwtDecode } from "jwt-decode";

// function getSession() {
//   const token = sessionStorage.getItem("token");
//   const userID = sessionStorage.getItem("userId");
//   return {token, userID}
// }

export async function loginData(authDetails) {
  const header = {
    method: "POST",
    headers: {"content-Type": "application/json"},
    body: JSON.stringify(authDetails)
  }

  const response = await fetch(`${import.meta.env.VITE_API_URL}/login`, header);
  const data = await response.json();
  console.log(response);
  if (data.accessToken) {
    const decoded = jwtDecode(data.accessToken);
    sessionStorage.setItem("token", data.accessToken);
    sessionStorage.setItem("userId", decoded.sub);
    // sessionStorage.setItem("cbid", JSON.stringify(response.user.id));
  }
  return data
}

export async function registerData(authDetails) {
  // const session = getSession();
  // const checkRes = await fetch(`http://localhost:8000/users?email=${authDetails.email}`,{
  //   headers: {
  //     Authorization: `Bearer ${session.token}`
  //   }
  // });
  // const existingUsers = await checkRes.json();

  // if (existingUsers.length > 0) {
  //   toast.error("User already exists!"); // show error toast
  //   return;
  // }

  const header = {
    method: "POST",
    headers: {"content-Type": "application/json"},
    body: JSON.stringify(authDetails)
  }

  const response = await fetch(`${import.meta.env.VITE_API_URL}/register`, header);
  const data = await response.json();

  if (!response.ok) {
    // json-server-auth returns a message if email exists
    toast.error(data); 
    return;
  }
  console.log(data);
  if (data.accessToken) {
    const decoded = jwtDecode(data.accessToken);
    sessionStorage.setItem("token", data.accessToken);
    sessionStorage.setItem("userId", decoded.sub);
    // sessionStorage.setItem("cbid", JSON.stringify(response.user.id));
  }
  return data;
}

export async function logout() {
  sessionStorage.removeItem("token");
}
