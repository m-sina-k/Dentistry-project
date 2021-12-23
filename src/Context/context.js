import React , {useState} from 'react';

const appContext = React.createContext();

export const AppProvider = ({children})=>{
    const [showBackdrop,setShowBackdrop] = useState(false)
    const [showSidebarMenu,setShowSidebarMenu] = useState(false)
    /* --------- fake loading animation before rendering the components --------- */
    const loadingDuration = Math.floor(Math.random() * (2500 - 1500 + 1)) + 1500;
    const [showLoading,setShowLoading] = useState(false);
    if(showLoading){
        setTimeout(() => {
            setShowLoading(false);
          }, loadingDuration);
    }
    return (
        <appContext.Provider value={{
            showBackdrop,
            setShowBackdrop,
            showSidebarMenu,
            setShowSidebarMenu,
            showLoading,
            setShowLoading
        }}>
            {children}
        </appContext.Provider>
    )
}

export const useGlobalContext = ()=>{
    return React.useContext(appContext);
}