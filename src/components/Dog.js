import React from 'react'

function Dogs ({ dogs }) {
    return(
        <div className="dogs">
            <div className="dogs__name">
                <p>{dogs.name}</p>
            </div>
            <div className="dogs__meta">
                <span>{dogs.breed}</span>
            </div>
            <div className="dogs__image">
                <img src={dogs.imageUrl} alt='Image not available' />
            </div>
        </div>
    )
}

export default Dogs
