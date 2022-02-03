import axios from 'axios'

const customerConfig = axios.create({
  baseURL: 'https://splana.com/mdp/api/api/customer/',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default customerConfig
