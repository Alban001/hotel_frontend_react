import { Outlet, Navigate } from "react-router-dom"

const ProtectdRoutes = () => {
    if(localStorage.getItem('token')){
         return <Outlet />
    } else {
        return <Navigate to='/login' />
    }
}

export default ProtectdRoutes