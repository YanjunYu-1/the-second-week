const Item = () => {
    return (
        <li className="item">
            <img
                src="https://media.steelseriescdn.com/thumbs/catalogue/products/00981-rival-650-wireless/a0fdbba64b844bce8bdf77c801ada302.png.350x280_q100_crop-fit_optimize.png"
            />
            <h2>Rival 650 Wireless</h2>
            <div className="price">$159.99</div>
            <div className="description">
                The first true performance wireless gaming mouse is here. The Rival 650 Wireless features Quantum Wireless™ 1ms lossless performance, lightning
                fast charging capabilities, and the most precise gaming sensor ever made.
            </div>
            <button>Add to Cart</button>
        </li>
    );
}

export default Item;