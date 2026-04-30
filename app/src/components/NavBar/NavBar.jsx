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

            <div className="nav-links">
                <Link to="/" className="link">
                    Home
                </Link>{" "}
                <Link to="/events" className="link">
                    Events
                </Link>{" "}
            </div>

            <div className="user-links">
                {user ? (
                    <>
                        <span className="user-email">{user.email}</span>
                        <button className="logout-btn" onClick={logout}>
                            Sign out
                        </button>
                    </>
                ) : (
                    <>
                        <Link to={"/login"} className="link">
                            Login
                        </Link>
                        <Link to={"/register"} className="link">
                            Register
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
}
