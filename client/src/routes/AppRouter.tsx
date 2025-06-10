import { Routes, Route } from 'react-router-dom'
import AuthLayout from '../layouts/AuthLayout'
import MainLayout from '../layouts/MainLayout'

import Home from '../pages/home/Home'
import Login from '../pages/auth/login'

const AppRouter = () => {
    return (
        <Routes>
            {/* Routes Authentification */}
            <Route path='/' element={<AuthLayout />}>
                <Route path="/" element={<Login />} />
            </Route>

            {/* Routes principales */}
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
            </Route>
        </Routes>
    )

}

export default AppRouter
