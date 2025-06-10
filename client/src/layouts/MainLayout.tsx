import { Outlet } from 'react-router-dom'

function MainLayout() {
    return (
        <main className="h-screen box-border">
            < Outlet />
        </main>
    )
}

export default MainLayout