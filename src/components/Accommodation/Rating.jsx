import React from "react";
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Rating({ rating }) {
    const stars = [1, 2, 3, 4, 5];

    return (
        <section className="rating_container">
            {stars.map((num) => (
                <FontAwesomeIcon icon={faStar} 
                key={num}
                className={
                    num > rating ? "star star-empty" : "star star-full"
                }
                />
            ))}
        </section>
    )
}

export default Rating;