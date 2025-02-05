import { createContext, useState } from "react";

export const timerContext = createContext()

export function TimerContextProvider({children}){
     const [time,setTime] = useState(60)
    return <timerContext.Provider value={{time,setTime}}>
        {children}
    </timerContext.Provider>
}