import { useState, useContext, useEffect } from 'react'
import { Button, Input, Modal, Text } from '@nextui-org/react'
import { CustomerContext } from '../context/CustomerContext'

const CustomerForm = ({ visible, closeHandler }) => {
  const { saveCustomer } = useContext(CustomerContext)

  const [customer, setCustomer] = useState({
    name: '',
    lastName: '',
    birthday: '',
  })

  const [disableButton, setDisabledButton] = useState(true)

  const handleChange = (e) => {
    const { name, value } = e.target
    setCustomer({ ...customer, [name]: value })
  }

  const handleSaveCustomer = async () => {
    await saveCustomer({ customer })
    setCustomer({
      name: '',
      lastName: '',
      birthday: '',
    })
    closeHandler()
  }

  useEffect(() => {
    return () => {
      setCustomer({
        name: '',
        lastName: '',
        birthday: '',
      })
    }
  }, [])

  useEffect(() => {
    if (customer.name && customer.lastName && customer.birthday) {
      setDisabledButton(false)
    } else {
      setDisabledButton(true)
    }
  }, [customer])

  return (
    <Modal
      closeButton
      aria-labelledby="modal-title"
      open={visible}
      onClose={closeHandler}
    >
      <Modal.Header>
        <Text id="modal-title" size={18}>
          Registrar cliente
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Input
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Nombre"
          name="name"
          value={customer.name}
          onChange={(e) => handleChange(e)}
        />
        <Input
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Apellido"
          name="lastName"
          value={customer.lastName}
          onChange={(e) => handleChange(e)}
        />
        <Input
          bordered
          fullWidth
          color="primary"
          size="lg"
          type="date"
          placeholder="Fecha de nacimiento"
          name="birthday"
          value={customer.birthday}
          onChange={(e) => handleChange(e)}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button auto onClick={handleSaveCustomer} disabled={disableButton}>
          Registrar
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CustomerForm
