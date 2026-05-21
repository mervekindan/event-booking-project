import { Link } from "react-router-dom";
import "./HomePage.css";

// Feel free to replace the content of this component with your own
function HomePage() {
    return (
        <div className="home-content">
            <h1 className="home-title">Discover Events You'll Actually Love</h1>
            <p className="home-subtitle">
                Find conferences, workshops, hackathons and meetups happening
                near you. Explore, book, and join events in seconds.
            </p>

            <Link to="/events" className="home-button">
                Discover events
            </Link>
        </div>
    );
}

export default HomePage;
