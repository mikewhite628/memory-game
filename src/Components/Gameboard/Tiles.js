import React from 'react'



function Tiles(props){

    const {
        card: { src, name },
        handleGameLogic,
    } = props

    return(
        <button
        onClick={handleGameLogic.bind(this, name)}
        >
            <img src={src} alt={name} />
        </button>
    )
}

export default Tiles