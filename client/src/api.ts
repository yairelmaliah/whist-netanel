import axios from 'axios'


const SERVER_URL = `http://18.157.68.216:5000`
export function getAllProducts() {
  return axios.get(`${SERVER_URL}/products`)
}

export function deleteProduct(id: number) {
  return axios.delete(`${SERVER_URL}/products/${id}`)
}

export function createNewProduct(data: any) {
  return axios.post(`${SERVER_URL}/products`, { ...data })
}

export function updateProduct(id: number, data: any) {
  return axios.patch(`${SERVER_URL}/products/${id}`, { ...data })
}

export function makeOrders(itemsIds: any[]) {
  return axios.post(`${SERVER_URL}/orders`, { data: itemsIds })
}

export function getOrders() {
  return axios.get(`${SERVER_URL}/orders`)
}