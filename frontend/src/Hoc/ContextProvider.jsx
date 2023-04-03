import { createContext, useState } from "react";

export const Context=createContext()

export default function ContextProvider({children}){
    const [isAuth,setauth]=useState(false)
    const [userdata,setuserdata]=useState("")
    const [loading,setloading]=useState(false)

    return <Context.Provider value={{isAuth,setauth,userdata,setuserdata,loading,setloading}}>{children}</Context.Provider>
}