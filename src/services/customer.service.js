import axios from 'axios'

const url = 'https://splana.com/mdp/api/api/customer'

export const customerList = async () => {
  const response = await axios.get(url)
  return response.data.data.customers
}

export const customerCreate = async ({ data }) => {
  const response = await axios.post(url, data)
  return {
    id: response.data.data.id,
    customer: response.data.data.customer,
  }
}

export const customerInfo = async ({ id }) => {
  const response = await axios.get(`${url}/${id}`)
  return response.data.data.customer
}

export const customerAverageAges = async () => {
  const response = await axios.get(`${url}/average/ages`)
  return response.data.data.average
}
