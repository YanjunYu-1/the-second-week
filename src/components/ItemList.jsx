import Item from '../components/Item'

const ItemList = ({items}) => {
    return (
        <ul className="items">
            {/* 需要对接收的数据新型迭代循环,并将每一个item的信息传递到Item中 */}
            {items.map(item =>(
                <Item key={item.id} item={item}/>
            ))}
        </ul>
    );
}

export default ItemList;