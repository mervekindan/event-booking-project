import { useState } from "react";
import EventDetail from "../EventDetail/EventDetail";
import EventList from "../EventList/EventList";
import "./HomePage.css";
import events from "../../data/events";

// Feel free to replace the content of this component with your own
function HomePage() {
    const [category, setCategory] = useState("all");

    return (
        <div className="home-content">
            <EventList category={category} setCategory={setCategory} />
            <EventDetail event={events[2]} />
        </div>
    );
}

export default HomePage;
