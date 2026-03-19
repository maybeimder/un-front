import { Outlet } from "react-router"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function AppLayout() {
    return (
        <div style={{ minHeight: '100dvh', display:'flex', flexDirection:'column'}}>
            <Header />

            <div style={{ width: '100%', display:'flex', flex: 1, alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
                <Outlet />
            </div>

            <Footer/>
        </div>
    )
}

