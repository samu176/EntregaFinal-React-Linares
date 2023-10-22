import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <div>
      <Link className="menu-link" to="/carrito">Carrito</Link>
    </div>
  );
};

export default CartWidget;