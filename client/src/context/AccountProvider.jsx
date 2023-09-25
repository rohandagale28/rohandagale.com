import { createContext, useEffect, useState } from 'react'

export const DataContext = createContext(null)

const DataProvider = ({ children }) => {
    const [project, setProject] = useState([])
    const [stack, setStack] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
    }, [])
    return (
        <DataContext.Provider value={{ project, setProject, loading, setLoading, stack, setStack }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider 