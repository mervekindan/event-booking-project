import { Outlet } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar.jsx";
import { Footer } from "../Footer/Footer.jsx";

export default function Layout() {
    return (
        <div>
            <header>
                <NavBar />
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
}
