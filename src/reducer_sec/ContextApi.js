import React, { createContext, useState } from 'react'

export const context = createContext()

const ContextApi = ({children}) => {
    const [cart,setCart]=useState([]);
    const [user,setUser]=useState([])
  return (
    <context.Provider value={{cart,setCart,user,setUser}}>{children}</context.Provider>
  )
}

export default ContextApi