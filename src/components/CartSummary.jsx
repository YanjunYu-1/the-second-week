const CartSummmary = ({ total, item }) => {
    return (
        <div className="cart-icon">
            <div className="cart-icon-values">
                <div className="cart-total">${total.toFixed(2)}</div>
                <div className="in-cart-items">{item} items</div>
            </div>
            <i className="fas fa-shopping-cart"></i>
        </div>
    );
}

export default CartSummmary;