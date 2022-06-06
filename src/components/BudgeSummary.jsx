import IncomeSummary from './IncomeSummary'
import ExpensesSummary from './ExpensesSummary'

const BudgeSummary = () => {
    return (
        <div className="budget">
            <div className="budget__title">
                Available Budget in{" "}
                <span className="budget__title--month">April 2020</span>:
            </div>

            <div className="budget__value">+ $225.10</div>

            <IncomeSummary />
            <ExpensesSummary />

            
        </div>
    );
}

export default BudgeSummary;