import React, { createContext, useContext, useReducer } from 'react'

export const AppContext = createContext()

const initialState = {
  auth: false,
  refetch: 0,
  punches: [],
  user: null
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload }
    case 'SET_AUTH':
      return { ...state, auth: action.payload }
    case 'SET_PUNCHES':
      return { ...state, punches: action.payload }
    case 'UPDATE_REFETCH':
      return { ...state, refetch: ++state.refetch }
    default:
      return { ...state }
  }
}

const AppProvider = ({ children, ...props }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider
      value={{
        ...state,
        dispatch,
        ...props
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider

export const useApp = () => useContext(AppContext)
