import React from 'react'

function Header(props) {
    const { score, highScore } = props;

    return (
        <header className='header'>
            <h1> Memory Game </h1>
            <div className='scoreboard'>
                <p>Score: {score} </p>
                <p> High Score: {highScore}</p>
            </div>
        </header>
    )
}

export default Header