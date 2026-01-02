import React, { useEffect, useState } from 'react'
import {useFilter} from '../context/FilterContext'

export default function useFetch(url) {

  const {initialProductList} = useFilter();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;
    const controller = new AbortController();
    async function fetchdata() {
      try {
        setLoading(true);
        const response = await fetch(url, {
          signal: controller.signal,
        });
        if (!response.ok) {
          throw new Error("Failed to fetch data"); //esLint-disable-line
        }
        const result = await response.json();
        setProducts(result);
        initialProductList(result);
       setError(null);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchdata();
    return () => controller.abort();
  },[url]); //esLint-disable-line
  
  return {products, loading, error};
}
