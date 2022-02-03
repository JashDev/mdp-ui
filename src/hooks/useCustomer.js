import { customerInfo } from '../services/customer.service'
import { useContext, useEffect, useState } from 'react'
import { LoadingContext } from '../context/LoadingContext'

const useCustomer = ({ id }) => {
  const [customer, setCustomer] = useState(null)
  const { handleShow, handleHide } = useContext(LoadingContext)

  useEffect(async () => {
    const fetchCustomer = async () => {
      handleShow()
      try {
        const customer = await customerInfo({ id })
        setCustomer(customer)
      } catch (error) {
        console.log(error)
      } finally {
        handleHide()
      }
    }
    id && (await fetchCustomer())
    return () => {
      handleHide()
      setCustomer(null)
    }
  }, [id])

  return { customer, setCustomer }
}

export default useCustomer
