const CarItem = ({item}) => {
    const {name,quantity,price}=item;
    return (
        <li className="cart-item">
            <div className="name">{name}</div>
            <div className="quantity">
                <button className="fa fa-minus"><i></i></button>{quantity}<button className="fa fa-plus"><i></i></button>
            </div>
            <div className="price">@ ${price.toFixed(2)} </div>
            <button className="remove-from-cart"><i className="far fa-times-circle"></i></button>
        </li>
    );
}

export default CarItem;