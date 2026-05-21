import { useEffect, useState } from "react";
import { EventCard } from "../EventCard/EventCard.jsx";
import "./EventList.css";
import api from "../../api.js";

export default function EventList({ search, category, page, setTotal }) {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const timeout = setTimeout(() => {
            const query = new URLSearchParams();

            if (search) query.append("q", search);
            if (category !== "all") query.append("category_like", category);

            query.append("_page", page);
            query.append("_limit", 3);

            setLoading(true);
            setError(null);

            fetch(api(`/events?${query.toString()}`))
                .then((res) => {
                    if (!res.ok) {
                        throw new Error("Failed to fetch events");
                    }

                    const totalCount = res.headers.get("X-Total-Count");
                    setTotal(Number(totalCount));

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
    }, [category, search, page]);

    if (loading) return <p>Loading events...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
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
            )}{" "}
        </>
    );
}
