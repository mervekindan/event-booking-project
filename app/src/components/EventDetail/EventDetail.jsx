// TODO: display at least date, time, venue, city, and description for one event
// TODO: use useParams() to get the event id from the URL
// TODO: fetch the event from GET /events/:id instead of using mock data
import events from "../../data/events.js";
import "./EventDetail.css";

export default function EventDetail() {
    const event = events[0];

    return (
        <div className="event-detail">
            <h2>{event.name}</h2>
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

            <p>{event.description}</p>
        </div>
    );
}
