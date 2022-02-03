import { useState } from 'react'

const useModal = (closeCallback) => {
  const [visible, setVisible] = useState(false)
  const openHandler = () => setVisible(true)
  const closeHandler = () => {
    setVisible(false)
    closeCallback && closeCallback()
    console.log('closed')
  }

  return { visible, openHandler, closeHandler }
}

export default useModal
