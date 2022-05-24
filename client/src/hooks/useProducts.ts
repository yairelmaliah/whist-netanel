import { useEffect, useState } from "react"
import { getAllProducts } from "../api";


export const useProducts = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getAllProducts().then((res) => setProducts(res.data));
  }, []);

  const reloadProducts = (): void => {
    getAllProducts().then((res) => setProducts(res.data));
  }

  return [products, reloadProducts] as const
}