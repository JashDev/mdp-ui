import { Button, Card, Text } from '@nextui-org/react'
import CustomerForm from './component/CustomerForm'
import useModal from './hooks/useModal'
import { useContext, useState } from 'react'
import { CustomerContext } from './context/CustomerContext'
import CustomerInfo from './component/CustomerInfo'
import { LoadingContext } from './context/LoadingContext'
import AppLoading from './component/AppLoading'
import styled from '@emotion/styled'
import CustomerCard from './component/CustomerCard'

const MainContainer = styled.div`
  padding: 10px 20px;
  max-width: 800px;
  margin: 0 auto;
`

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 20px;
`

const AverageContainer = styled.div`
  text-align: center;
  margin: 15px 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const App = () => {
  const { customers, averageAges, fetchCustomerList } =
    useContext(CustomerContext)
  const { show } = useContext(LoadingContext)
  const { visible, openHandler, closeHandler } = useModal()
  const {
    visible: visibleInfo,
    openHandler: openHandlerInfo,
    closeHandler: closeHandlerInfo,
  } = useModal(() => {
    setCustomerId(null)
  })

  const [customerId, setCustomerId] = useState(null)
  return (
    <>
      <MainContainer>
        {show && <AppLoading />}

        <TitleContainer>
          <Text h1>Lista de clientes</Text>
        </TitleContainer>
        <AverageContainer>
          {customers.length > 0 ? (
            <Text h3>Promedio de edades: {averageAges}</Text>
          ) : (
            <Text h3>No hay clientes</Text>
          )}
          <Button onClick={fetchCustomerList} css={{ marginBottom: '5px' }}>
            Actualizar clientes
          </Button>
          <Button onClick={openHandler}>Crear nuevo cliente</Button>
        </AverageContainer>

        {customers.map((customer) => (
          <CustomerCard
            key={customer.id}
            customer={customer}
            setCustomerId={setCustomerId}
            openHandlerInfo={openHandlerInfo}
          />
        ))}
      </MainContainer>

      <CustomerForm visible={visible} closeHandler={closeHandler} />

      <CustomerInfo
        visible={visibleInfo}
        closeHandler={closeHandlerInfo}
        id={customerId}
      />
    </>
  )
}

export default App
