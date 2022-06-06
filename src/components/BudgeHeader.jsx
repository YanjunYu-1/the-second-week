import BudgeSummary from './BudgeSummary'

const BudgeHeader = () => {
    return (
        <div className="budget">
            <div className="budget__title">
                Available Budget in{" "}
                <span className="budget__title--month">April 2020</span>:
            </div>

            <div className="budget__value">+ $225.10</div>
            <BudgeSummary type="income" />
            <BudgeSummary type="expenses" />          
        </div>
    );
}

export default BudgeHeader;