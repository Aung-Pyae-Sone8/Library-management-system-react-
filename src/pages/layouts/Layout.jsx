import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Create</li>
                </ul>
            </nav>

            {/* dynamic router changes content  */}
            <Outlet />
        </div>
    )
}

export default Layout;