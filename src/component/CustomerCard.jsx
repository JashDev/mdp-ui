import { Card, Text } from '@nextui-org/react'
import { getAge } from '../utils/age'

const CustomerCard = ({ customer, setCustomerId, openHandlerInfo }) => {
  return (
    <Card
      clickable
      bordered
      onClick={() => {
        setCustomerId(customer.id)
        openHandlerInfo()
      }}
    >
      <Text key={customer.id}>
        {customer.id} - {customer.name} {customer.lastName}
      </Text>
      <Text>Fecha de nacimiento: {customer.birthday}</Text>
      <Text>Edad: {getAge(customer.birthday)}</Text>
    </Card>
  )
}

export default CustomerCard
