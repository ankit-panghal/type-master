import { createContext, useState } from "react";

export const textContext =  createContext()

export const TextContextProvider = ({children}) => {
    const [text,setText] = useState('');
    const [start,setStart] = useState(false)
    
   return <textContext.Provider value={{text,setText,start,setStart}}>
        {children}
    </textContext.Provider>
}

