import { Outlet } from 'react-router-dom'
import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer'

const DashLayout = () => {
    return (
        <>
        <NavBar/>
                    <Outlet />
                    <Footer/>

        </>
    )
}
export default DashLayout