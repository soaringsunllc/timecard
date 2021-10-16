import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import AppProvider from './AppProvider'
import AppRouter from './AppRouter'
import '../styles/Authentication.css'

function App () {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  )
}

export default App
