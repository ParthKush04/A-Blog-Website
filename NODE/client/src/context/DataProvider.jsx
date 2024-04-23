import {createContext, useState} from "react"


export const DataContext = createContext(null);
// We are making a context api


const DataProvider = ({children}) =>{
    const[account,setAccount] = useState({username : '',name : ''})
  return (
    <DataContext.Provider value = {{ // Values that are to be exported are passed here 
        account,
        setAccount
    }}>
        {children}
        </DataContext.Provider>
)
}
export default DataProvider
