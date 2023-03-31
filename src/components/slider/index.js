import './index.css';

const Slider = ({
    heroeName,
    universe,
    alterEgo,
    activity,
    friends,
    powers,
    description,
    image,
}) => {
    return (
        <>
        <div className="slider__main-text">
            <h2 className="slider__card-name">{heroeName}</h2>
            <div className="details"><b>Вселенная:</b> {universe}</div>
            <div className="details"><b>Альтер эго:</b> {alterEgo}</div>
            <div className="details"><b>Род деятельности:</b> {activity}</div>
            <div className="details"><b>Друзья:</b> {friends}</div>
            <div className="details"><b>Суперсилы:</b> {powers}</div>
            <div className="details"><b>Подробнее:</b> {description}</div>
        </div>
        <img src={image} className="slider__card-image" alt={heroeName} />
        </>
    )
}

export default Slider;