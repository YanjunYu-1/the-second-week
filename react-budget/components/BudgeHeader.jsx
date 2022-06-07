import styles from "./BudgeHeader.module.css"
import BudgeSummary from './BudgeSummary'

const BudgeHeader = () => {
    // console.log(styles);
    return (
        <div className={styles.top}>
            <div className={styles.container}>
                <div className={styles.title}>
                    Available Budget in{" "}
                    <span className={styles.mounth}>April 2020</span>:
                </div>

                <div className={styles.value}>+ $225.10</div>
                <BudgeSummary type="income" />
                <BudgeSummary type="expenses" />
            </div>
        </div>

    );
}

export default BudgeHeader;