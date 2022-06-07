import styles from './TransactionList.module.css';
import Transaction from './Transaction'


const TransactionList = ({ type, transactions }) => {
    // temporary hack until we fix the styles临时修改，直到我们修复样式
    if (type === "incomes") type = "income"
    return (
        <div className={styles[type]}>
            <h2 className={`${styles[type]}__title`}>{type.toUpperCase()}</h2>
            {/* <h2 className={`${type}__title`}>Expenses</h2>
            <div className={`${type}__list`}> */}
            <div className={`${styles[type]}__list`}>
                {transactions.map((transaction) => (
                    <Transaction
                        key={transaction.id}
                        type={transaction.type}
                        details={transaction}
                    />
                ))}
                {/* <Transaction type={type} /> */}
            </div>
        </div>
    );
}

export default TransactionList;