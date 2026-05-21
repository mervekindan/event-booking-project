import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./CartPage.css";

export default function CartPage() {
    const { cartItems, removeFromCart, updateQuantity } = useCart();
    const { user } = useAuth();

    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
    );

    if (cartItems.length === 0) {
        return (
            <div className="empty-cart">
                <h1>Your cart is empty</h1>
                <p>
                    Browse events and add tickets to continue enjoying yourself.
                </p>

                <Link to="/events">
                    <button>Discover events</button>
                </Link>
            </div>
        );
    }

    return (
        <div className="cart-page">
            <h1>Your cart</h1>
            <div className="cart-items">
                {cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                        <div className="cart-info">
                            <h3>{item.name}</h3>
                            <p>€{item.price} each</p>
                        </div>

                        <div className="quantity-controls">
                            <button
                                onClick={() =>
                                    updateQuantity(item.id, item.quantity - 1)
                                }
                                disabled={item.quantity <= 1}
                            >
                                -
                            </button>

                            <span>{item.quantity}</span>

                            <button
                                onClick={() =>
                                    updateQuantity(item.id, item.quantity + 1)
                                }
                                disabled={
                                    item.quantity >= item.ticketsAvailable
                                }
                            >
                                +
                            </button>
                        </div>

                        <div className="cart-total">
                            €{item.price * item.quantity}
                        </div>

                        <button
                            className="remove-btn"
                            onClick={() => removeFromCart(item.id)}
                        >
                            Remove
                        </button>
                    </div>
                ))}{" "}
            </div>

            <div className="cart-summary">
                <h2>Total: €{total}</h2>

                {user ? (
                    <button>Proceed to checkout</button>
                ) : (
                    <p>You must be logged in to checkout.</p>
                )}
            </div>
        </div>
    );
}
