
import CarItem from '../components/CarItem'
const Car = ({carItems}) => {
    console.log(carItems);
    return (
        <aside className="cart">
            <h2>Your Cart</h2>
            <ul>
                {carItems.map((item)=>(
                    <CarItem key={item.id} item={item} />
                ))}
            </ul>
            <div className="total">Total: $604.93</div>
        </aside>
    );
}

export default Car;