import React from 'react';

const AppContext = React.createContext();

export const AppStorage = ({children}) => {

    const [produtos, setProdutos] = React.useState(null);

    React.useEffect(()=>{
        setProdutos(JSON.parse(window.localStorage.getItem("produtos")));
    }, []);

    return <AppContext.Provider value={{produtos}} >{children}</AppContext.Provider>
}

export default AppContext;