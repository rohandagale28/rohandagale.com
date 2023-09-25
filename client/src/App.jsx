import React, { Suspense, useContext, useEffect } from 'react'
import AppRoutes from "./Routes/MainRoutes"
import "./App.scss"
import Navbar from './Navbar/Navbar'
import { Loading } from './Components/Loader'
import { Footer } from './Footer/Footer'
import { DataContext } from './context/AccountProvider'
import { getProject, getStack } from './Api/Api'

const App = () => {
  const { setProject, setLoading, setStack } = useContext(DataContext)

  useEffect(() => {
    getProject().then((res) => setProject(res.data)).then(setLoading(false)).catch((err) => console.log("Fail to retrieve data"))
    getStack().then((res) => setStack(res.data)).then(setLoading(false)).catch((err) => console.log("Fail to retrieve data"))
  }, [])
  return (
    <React.Fragment>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <AppRoutes />
      </Suspense>
      <Footer />
    </React.Fragment>
  )
}

export default App