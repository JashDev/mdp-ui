import React from 'react'
import { NextUIProvider } from '@nextui-org/react'
import ReactDOM from 'react-dom'
import App from './App'
import CustomerProvider from './context/CustomerContext'
import LoadingProvider from './context/LoadingContext'

ReactDOM.render(
  <React.StrictMode>
    <NextUIProvider>
      <LoadingProvider>
        <CustomerProvider>
          <App />
        </CustomerProvider>
      </LoadingProvider>
    </NextUIProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
