import { Link } from "react-router-dom";
import hyfLogo from "../../assets/hyf.svg";
import { useAuth } from "../../context/AuthContext.jsx";
import "./NavBar.css";

export function NavBar() {
    const { user, logout } = useAuth();
    return (
        <nav className="nav-bar">
            <a
                href="https://www.hackyourfuture.dk/"
                target="_blank"
                className="link"
            >
                <img src={hyfLogo} alt="HackYourFuture logo" className="logo" />
            </a>
            {/* Navigation links go here — e.g. link to event list, cart, login */}
            <div className="nav-links">
                <Link to="/events" className="link">
                    Events
                </Link>

                {user && (
                    <>
                        <span>{user.email}</span>
                        <button onClick={logout}>Sign out</button>
                    </>
                )}

                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
        </nav>
    );
}
