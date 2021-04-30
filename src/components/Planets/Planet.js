import React, {useEffect, useState} from 'react'

import Selection from './Selection';
import "./Selection.css";
const Planet = () => {

    const [planet, setPlanet] = useState([])
    const fetchplanet = async () => {
        const response = await fetch(`https://findfalcone.herokuapp.com/planets`);
        const data = await response.json();
        setPlanet(data);
    }

    useEffect(() => {
        fetchplanet();
    }, [])
    return (
        <div className="planet">
            <Selection planet={planet}/>
        </div>
    )
}

export default Planet