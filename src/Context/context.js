import React , {useState} from 'react';

const appContext = React.createContext();

export const AppProvider = ({children})=>{
    const [showBackdrop,setShowBackdrop] = useState(false)
    const [showSidebarMenu,setShowSidebarMenu] = useState(false)
    
    return (
        <appContext.Provider value={{
            showBackdrop,
            setShowBackdrop,
            showSidebarMenu,
            setShowSidebarMenu,
        }}>
            {children}
        </appContext.Provider>
    )
}

export const useGlobalContext = ()=>{
    return React.useContext(appContext);
}