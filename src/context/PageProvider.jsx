import { createContext, useContext, useState } from "react"

const pageContext=createContext();

export const PageProvider=({children})=>{
    const [isPageUp,setIsPageUp]=useState(false);

    return(
        <pageContext.Provider value={{isPageUp,setIsPageUp}}>
            {children}
        </pageContext.Provider>
    )
}

export const usePageContext=()=>useContext(pageContext);