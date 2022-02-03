import { Button, Modal, Text } from '@nextui-org/react'
import useCustomer from '../hooks/useCustomer'
import { useEffect } from 'react'
import { getAge } from '../utils/age'

const CustomerInfo = ({ id, visible, closeHandler }) => {
  const { customer, setCustomer } = useCustomer({ id })

  useEffect(() => {
    return () => {
      setCustomer(null)
      closeHandler()
    }
  }, [])

  return (
    <Modal
      closeButton
      animated={false}
      aria-labelledby="modal-title"
      open={visible}
      onClose={closeHandler}
    >
      <Modal.Header>
        <Text id="modal-title" size={18}>
          Cliente # {id}
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Text>Nombre: {customer?.name} </Text>
        <Text>Apellido: {customer?.lastName} </Text>
        <Text>Fecha de nacimiento: {customer?.birthday} </Text>
        {customer && <Text>Edad: {getAge(customer?.birthday)} </Text>}
      </Modal.Body>
      <Modal.Footer>
        <Button auto onClick={closeHandler}>
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CustomerInfo
