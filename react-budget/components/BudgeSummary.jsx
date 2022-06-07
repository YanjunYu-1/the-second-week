import styles from './BudgetSummary.module.css'

const BudgeSummary = ({ type }) => {

    // temporary hack until we fix the styles临时修改，直到我们修复样式
    //此处判断type是何值
    if (type === "incomes") type = "incomes";
    return (
        <div className={styles[type]}>
            <div className={styles.text}>{type.toUpperCase()}</div>
            <div className="right">
                <div className={styles.value}>- $354.99</div>
                <div
                    className={`${styles.percentage} ${type === "expenses" && styles["expenses--percentage"]
                        }`}
                    >
                        61%
                    </div>
                    {/* <div className={`budget__${type}--percentage`}>61%</div> */}
                    {/* 临时修改了各式
                {type==="expenses"&& (
                    <div className={`budget__${type}--percentage`}>61%</div>
                )} */}
                
            </div>
        </div>
    );
}

export default BudgeSummary;