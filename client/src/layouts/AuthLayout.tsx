import { Outlet } from "react-router-dom"

function AuthLayout() {
    return (
        <main className="h-screen box-border">
            < Outlet />
        </main>
    )
}

export default AuthLayout

