const BudgeSummary = ({type}) => {
    // temporary hack until we fix the styles临时修改，直到我们修复样式
    //此处判断type是何值
    if(type==="income") type="income";
    return (
        <div className={`budget__${type}`}>
            <div className={`budget__${type}--text`}>{type}</div>
            <div className="right">
                <div className={`budget__${type}--value`}>- $354.99</div>
                <div className={`budget__${type}--percentage`}>61%</div>
                {/* 临时修改了各式
                {type==="expenses"&& (
                    <div className={`budget__${type}--percentage`}>61%</div>
                )} */}
                
            </div>
        </div>
    );
}

export default BudgeSummary;