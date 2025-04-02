import './CartWidget.css'
import { GiShoppingCart } from "react-icons/gi";

function CartWidget({ cantidad }) {
    return (
        <>
            <GiShoppingCart />
            <p>{cantidad}</p>
        </>

    );
};

export default CartWidget