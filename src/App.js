import {useState} from 'react'
import "./App.css";
import Header from "./components/Header";
import Car from "./components/Car";
import ItemList from "./components/ItemList";
import CartSummary from "./components/CartSummary";
import {initialItems,initialCartItems} from "./initialItems";

function App() {
  //创建item的初始状态，即每个手机的信息，因为信息存储在item.jsx中，所以要将数据传递进去
  const [items, setItems] = useState(initialItems);
  
  //创建carItems的初始状态，即每个手机的信息，因为信息存储在item.jsx中，所以要将数据传递进去
  const [carItems, setcarItems] = useState(initialCartItems);
  
  //car里面的总价与总数量
  const cartTotalPrice=carItems.reduce(
    (total,item)=>(total+=item.price*item.quantity),
    0
  )
  
  const carTotalItems=carItems.reduce(
    (total,item)=>(total+=item.quantity),
    0
  )

  return (
    <>
      <Header>
        <CartSummary total={cartTotalPrice} item={carTotalItems} />
        <Car carItems={carItems}/>
      </Header>
      <main>
        <ItemList items={items}/>
      </main>
    </>
  );
}

export default App;
