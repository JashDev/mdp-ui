import { createContext, useContext, useEffect, useState } from 'react'
import {
  customerAverageAges,
  customerCreate,
  customerList,
} from '../services/customer.service'
import { LoadingContext } from './LoadingContext'

export const CustomerContext = createContext()

const CustomerProvider = (props) => {
  const [customers, setCustomers] = useState([])
  const [averageAges, setAverageAges] = useState(null)

  const { handleShow, handleHide } = useContext(LoadingContext)

  const fetchCustomerList = async () => {
    handleShow()
    try {
      const response = await customerList()
      setCustomers(response)
    } catch (error) {
      setCustomers([])
      console.error(error)
    } finally {
      handleHide()
    }
  }

  const saveCustomer = async ({ customer }) => {
    handleShow()
    try {
      await customerCreate({
        data: customer,
      })
      await fetchCustomerList()
      await getCustomerAverageAges()
    } catch (error) {
      console.log(error)
    } finally {
      handleHide()
    }
  }

  const getCustomerAverageAges = async () => {
    handleShow()
    try {
      const response = await customerAverageAges()
      setAverageAges(response)
    } catch (error) {
      console.log(error)
    } finally {
      handleHide()
    }
  }

  useEffect(async () => {
    await fetchCustomerList()
    await getCustomerAverageAges()
  }, [])

  return (
    <CustomerContext.Provider value={{ customers, averageAges, saveCustomer }}>
      {props.children}
    </CustomerContext.Provider>
  )
}

export default CustomerProvider
