/* eslint-disable react/prop-types */

const Card = ({ index, frameSrc, handleClick }) => {
    const handleMouseOver = () => document.getElementById("cursor").classList.add("active");
    const handleMouseOut = () => document.getElementById("cursor").classList.remove("active");

    return (
        <div
            className="inner"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onClick={() => handleClick(index, frameSrc)}
        >
            {/* Content inside the card */}
            sel
        </div>
    );
};

export default Card;
