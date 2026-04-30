import { useState, useEffect } from "react";
import { useAsyncError, useParams } from "react-router-dom";
import "./EventDetail.css";

const BASE_URL = "http://localhost:3001";

export default function EventDetail() {
    const { id } = useParams();

    const [quantity, setQuantity] = useState(1);
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);

        fetch(`${BASE_URL}/events/${id}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch event");
                }
                return res.json();
            })
            .then((data) => {
                setEvent(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <p>Loading event...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!event) return <p>No event found</p>;

    return (
        <div className="event-detail-container">
            <div className="event-detail">
                <h2>{event.name}</h2>
                <div className="event-info">
                    <p>
                        <strong>Date: </strong>
                        {event.date}
                    </p>
                    <p>
                        <strong>Time: </strong>
                        {event.time}
                    </p>
                    <p>
                        <strong>Venue: </strong>
                        {event.venue}
                    </p>
                    <p>
                        <strong>City: </strong>
                        {event.city}
                    </p>
                </div>

                <p>{event.description}</p>

                <p className="price">
                    <strong>
                        {event.price === 0 ? "Free" : `€${event.price}`}
                    </strong>
                </p>

                <p className="available-tickets">
                    <strong>
                        {event.ticketsAvailable === 0
                            ? "Sold out"
                            : event.ticketsAvailable === 1
                              ? "1 ticket left"
                              : `${event.ticketsAvailable} tickets left`}
                    </strong>
                </p>
            </div>

            <div className="ticket-selection">
                <label>
                    Quantity:
                    <input
                        type="number"
                        min="1"
                        max={event.ticketsAvailable || 1}
                        value={quantity}
                        onChange={(e) => {
                            const value = Math.max(
                                1,
                                Math.min(
                                    event.ticketsAvailable,
                                    Number(e.target.value),
                                ),
                            );

                            setQuantity(value);
                        }}
                        disabled={event.ticketsAvailable === 0}
                    />
                </label>

                <p>
                    Total:{" "}
                    {event.price === 0 ? "Free" : `€${quantity * event.price}`}
                </p>
                <button
                    className="add-to-cart-btn"
                    disabled={event.ticketsAvailable === 0}
                >
                    {event.price === 0 ? "Register" : "Add to cart"}
                </button>
            </div>
        </div>
    );
}
