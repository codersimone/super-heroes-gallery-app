import './index.css';

const Arrow = ({isLeft}) => {
    //Условный (тернарный) оператор (?:) - оператор JavaScript, который можно использовать, когда необходимо в зависимости от условия выполнить одно из двух заданных выражений (если это - то это!)
    const arrowId = isLeft ? "superArrowLeft" : "superArrowRight";
    const arrowClass = isLeft ? "arrow-left" : "arrow-right";
    return (
        <div className="arrowStyle">
            <svg id={arrowId} className={arrowClass} viewBox="0 0 5 9">
                <path d="M0.419,9.000 L0.003,8.606 L4.164,4.500 L0.003,0.394 L0.419,0.000 L4.997,4.500 L0.419,9.000 Z" />
            </svg>
        </div>
    )
}

export default Arrow;