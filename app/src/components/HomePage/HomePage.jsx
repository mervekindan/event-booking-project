import { useState, useEffect } from "react";
import EventDetail from "../EventDetail/EventDetail";
import EventList from "../EventList/EventList";
import "./HomePage.css";
import events from "../../data/events";

// Feel free to replace the content of this component with your own
function HomePage() {
    const [category, setCategory] = useState("all");
    const [search, setSearch] = useState("");

    return (
        <div className="home-content">
            <div className="home-header">
                <h1>Upcoming Events</h1>
                <div className="filtration">
                    <input
                        className="search-input"
                        type="text"
                        placeholder="Search events..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <select
                        className="filter-categories"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="all">All Categories</option>
                        <option value="conference">Conference</option>
                        <option value="hackathon">Hackathon</option>
                        <option value="workshop">Workshop</option>
                        <option value="meetup">Meetup</option>
                        <option value="bootcamp">Bootcamp</option>
                    </select>
                </div>
            </div>

            <EventList search={search} category={category} />
            <EventDetail event={events[2]} />
        </div>
    );
}
console.log(category);
export default HomePage;
