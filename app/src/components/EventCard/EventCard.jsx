import "./EventCard.css";

export function EventCard({ event }) {
    return (
        <div className="event-card">
            {/* <img src={event.image} alt={event.name} /> */}
            <div className="card-heading">
                <h2>{event.name}</h2>
                <div className="category-chips">
                    <span>{event.category}</span>
                </div>
            </div>

            <h3>
                {event.date} at {event.time}
            </h3>
            <p>
                {event.venue}, {event.city}
            </p>

            <p className="availability">
                {event.ticketsAvailable === 0
                    ? "Sold out"
                    : `${event.ticketsAvailable} tickets left`}
            </p>

            <h4>{event.price === 0 ? "Free" : `€${event.price}`}</h4>
            <button
                className="buy-ticket-btn"
                disabled={event.ticketsAvailable === 0}
            >
                {event.ticketsAvailable === 0 ? "Sold out" : "Buy ticket"}
            </button>
        </div>
    );
}
