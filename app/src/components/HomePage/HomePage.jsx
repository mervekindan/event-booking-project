import EventDetail from "../EventDetail/EventDetail";
import EventList from "../EventList/EventList";

// Feel free to replace the content of this component with your own
function HomePage() {
    return (
        <div className="home-content">
            <EventList />
            <EventDetail />
        </div>
    );
}

export default HomePage;
