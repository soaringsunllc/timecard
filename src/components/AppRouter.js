import React from 'react'
import { useApp } from './AppProvider'
import Authentication from './Authentication'
import Timecard from './Timecard'

const AppRouter = () => {
  const { auth } = useApp()

  return <>{!auth ? <Authentication /> : <Timecard />}</>
}

export default AppRouter
