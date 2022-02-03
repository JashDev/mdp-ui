import { createContext, useState } from 'react'

export const LoadingContext = createContext()

const LoadingProvider = (props) => {
  const [show, setShow] = useState(false)

  const handleShow = () => {
    setShow(true)
  }

  const handleHide = () => {
    setShow(false)
  }

  return (
    <LoadingContext.Provider value={{ show, handleShow, handleHide }}>
      {props.children}
    </LoadingContext.Provider>
  )
}

export default LoadingProvider
