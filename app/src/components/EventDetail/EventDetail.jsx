// TODO: use useParams() to get the event id from the URL
// TODO: fetch the event from GET /events/:id instead of using mock data
import { useState } from "react";
import events from "../../data/events.js";
import "./EventDetail.css";

export default function EventDetail({ event }) {
    const [quantity, setQuantity] = useState(1);

    if (!event) {
        return (
            <div className="event-detail">
                <p>Select an event to see details</p>
            </div>
        );
    }

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
