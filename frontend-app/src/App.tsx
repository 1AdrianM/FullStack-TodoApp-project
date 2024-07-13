import { Route, Routes, } from "react-router-dom"
import Layout from "./Pages/Layout/Layout"
import Public from './Pages/Public/Public'
import Login from './features/auth/Login/Login'
function App() {
  return (
    <>
  <Routes>
<Route path='/'element={<Layout/>}/> {'Layout'}
{'Public Routes'}
<Route index element={<Public/>} />
<Route path='login' element={<Login/>}/>{'Login Rout'}
<Route >

</Route>

  </Routes>
    </>
  )
}

export default App
