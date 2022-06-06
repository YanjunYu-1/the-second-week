import "./App.css";
import BudgeHeader from "./components/BudgeHeader";
import AddTransactionForm from "./components/AddTransactionForm";
import TransactionList from "./components/TransactionList";

function App() {
  return (
    <>
      <div className="top">
        <BudgeHeader />
      </div>

      <div className="bottom">
        <AddTransactionForm />

        <div className="container">
          <TransactionList type="income"/>
          <TransactionList type="expense"/>
        </div>
      </div>
    </>
  );
}

export default App;
