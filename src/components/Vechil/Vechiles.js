import React, {useEffect, useState} from 'react'
const Vechiles = () => {

    const [vehicle, setVehicle] = useState([])
    const fetchvehicle = async () => {
        const response = await fetch(`https://findfalcone.herokuapp.com/vehicles`);
        const data = await response.json();
        console.log(data);
        setVehicle(data);
    }

    useEffect(() => {
        fetchvehicle();
    }, [])
    return (
        <div>

        </div>
    )
}

export default Vechiles
