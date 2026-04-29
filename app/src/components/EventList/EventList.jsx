import { useEffect, useState } from "react";
import { EventCard } from "../EventCard/EventCard.jsx";
import "./EventList.css";

const BASE_URL = "http://localhost:3001";

export default function EventList({ search, category }) {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const timeout = setTimeout(() => {
            const query = new URLSearchParams();

            if (search) query.append("q", search);
            if (category !== "all") query.append("category_like", category);

            setLoading(true);
            setError(null);

            fetch(`${BASE_URL}/events?${query.toString()}`)
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
        }, 300);

        return () => clearTimeout(timeout);
    }, [category, search]);

    if (loading) return <p>Loading events...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <section className="event-list">
            <h2>
                {" "}
                {events.length === 0
                    ? "No events found"
                    : `${events.length} event${events.length > 1 ? "s" : ""} found`}
            </h2>
            {events.length === 0 ? (
                <p>
                    No events found
                    {search && (
                        <>
                            {" "}
                            for "<strong>{search}</strong>"
                        </>
                    )}
                    {category !== "all" && (
                        <>
                            {" "}
                            in category "<strong>{category}</strong>"
                        </>
                    )}
                </p>
            ) : (
                <div className="event-grid">
                    {events.map((event) => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>
            )}
        </section>
    );
}
