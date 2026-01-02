import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function ProtectedRoute({children}) {

  const navigate = useNavigate();

  const token = sessionStorage.getItem("token");
  
  useEffect(() => {
    if (!token) {
      navigate('/login', { replace: true });
    }
  }, [token, navigate]);

  // Prevent rendering protected content before redirect
  if (!token) return null;

  return children;
}
