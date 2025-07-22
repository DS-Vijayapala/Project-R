import { Children, createContext, useContext } from "react";

export const AppContext = createContext()

export const AppProvider = ({ Children }) => {

    const value = {

    }

    return (

        <AppContext.Provider value={value}>

            {Children}

        </AppContext.Provider>

    )

}

export const useAppContext = () => {

    return useContext(AppContext)

}