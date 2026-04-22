import events from "../../data/events.js";
import { EventCard } from "../EventCard/EventCard.jsx";
import "./EventList.css";

// TODO: replace the mock data import with a fetch call to GET /events

export default function EventList({ category, setCategory }) {
    const filteredEvents =
        category === "all"
            ? events
            : events.filter(
                  (event) =>
                      event.category.toLowerCase() === category.toLowerCase(),
              );

    return (
        <section className="event-list">
            <div className="event-list-header">
                <h1>Upcoming Events ({filteredEvents.length})</h1>
                <select
                    className="filter-categories"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="all">All Categories</option>
                    <option value="conference">Conference</option>
                    <option value="hackathon">Hackathon</option>
                    <option value="workshop">Workshop</option>
                </select>
            </div>

            {filteredEvents.length === 0 ? (
                <p>No events found for this category</p>
            ) : (
                <div className="event-grid">
                    {filteredEvents.map((event) => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>
            )}
        </section>
    );
}
