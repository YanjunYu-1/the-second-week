import Transaction from './Transaction'


const TransactionList = ({type}) => {
    // temporary hack until we fix the styles临时修改，直到我们修复样式
    if(type === 'income') type='income'
    return (
        <div className={type}>
            <h2 className={`${type}__title`}>Expenses</h2>
            <div className={`${type}__list`}>
                <Transaction type={type}/>
                <Transaction type={type}/>
                <Transaction type={type}/>
            </div>
        </div>
    );
}

export default TransactionList;