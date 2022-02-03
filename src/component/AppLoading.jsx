import styled from '@emotion/styled'
import { Loading } from '@nextui-org/react'

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
`

const AppLoading = () => {
  return (
    <LoadingContainer>
      <Loading />
    </LoadingContainer>
  )
}

export default AppLoading
