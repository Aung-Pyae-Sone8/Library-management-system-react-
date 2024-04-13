import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar'

const Layout = () => {
    return (
        <div>
            <Navbar />

            {/* dynamic router changes content  */}
            <div className='max-w-6xl mx-auto p-3'>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;