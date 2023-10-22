import "./CartWidget.css";

const CartWidget = () => {
  return (
    <a className="cart-widget" href="#">
      🛒<span className="cart-products">0</span>
    </a>
  );
};

export default CartWidget;
