import "./App.css";
import BudgeSummary from "./components/BudgeSummary";
import AddForm from "./components/AddForm";
import IncomeList from "./components/IncomeList";
import ExpensesList from "./components/ExpensesList";

function App() {
  return (
    <>
      <div className="top">
        <BudgeSummary />
      </div>

      <div className="bottom">
        <AddForm />

        <div className="container">
          <IncomeList />

          <ExpensesList />
        </div>
      </div>
    </>
  );
}

export default App;
