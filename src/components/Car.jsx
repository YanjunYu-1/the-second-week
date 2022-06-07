
import CarItem from '../components/CarItem'
const Car = () => {
    return (
        <aside className="cart">
            <h2>Your Cart</h2>
            <ul>
                <CarItem />
                <CarItem />
                <CarItem />
                <CarItem />
                <CarItem />
            </ul>
            <div className="total">Total: $604.93</div>
        </aside>
    );
}

export default Car;