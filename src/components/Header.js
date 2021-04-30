import React from 'react'
import "./Header.css";
const Header = ({count}) => {
    return (
        <div>
            <h1 className="falcone">Finding Falcone!</h1>
            <h2 className="falcone">Select palanet you want search in:</h2>
            <h3 className="falcone">Time Taken: {count} </h3>
        </div>
    )
}

export default Header
