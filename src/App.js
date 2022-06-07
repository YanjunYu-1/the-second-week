import "./App.css";
import Header from "./components/Header";
import Car from "./components/Car";
import ItemList from "./components/ItemList";
import CartSummary from "./components/CartSummary";

function App() {
  return (
    <>
      <Header>
        <CartSummary />
        <Car />
      </Header>
      <main>
        <ItemList />
      </main>
    </>
  );
}

export default App;
