import { useState, useEffect } from "react";
import EventList from "../EventList/EventList";
import "./EventsPage.css";

export default function EventsPage() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("all");
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);

    const totalPages = Math.ceil(total / 3);

    useEffect(() => {
        setPage(1);
    }, [search, category]);

    return (
        <div className="events-content">
            <div className="events-header">
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
            <section className="event-list">
                <h2>
                    {" "}
                    {total === 0
                        ? "No events found"
                        : `${total} event${total > 1 ? "s" : ""} found`}
                </h2>

                <EventList
                    search={search}
                    category={category}
                    page={page}
                    setTotal={setTotal}
                />
            </section>
            <div className="pagination">
                <button
                    onClick={() => setPage((p) => Math.max(p - 1, 1))}
                    disabled={page === 1}
                >
                    Previous
                </button>
                <span>
                    Page {page} of {totalPages || 1}
                </span>
                <button
                    onClick={() => setPage((p) => p + 1)}
                    disabled={page >= totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
}
