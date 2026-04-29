import { useEffect, useState } from "react";
import { EventCard } from "../EventCard/EventCard.jsx";
import "./EventList.css";

const BASE_URL = "http://localhost:3001";

export default function EventList({ search, category }) {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`${BASE_URL}/events`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch events");
                }
                return res.json();
            })
            .then((data) => {
                setEvents(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading events...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="event-grid">
            {events.map((event) => (
                <EventCard key={event.id} event={event} />
            ))}
        </div>
    );
}
