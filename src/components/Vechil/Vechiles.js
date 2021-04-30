import React, { useEffect, useState } from 'react'

const Vechiles = () => {

    const [vechile, setVechile] = useState([]);

    const fetchVehicle = async () => {
        const response = await fetch(`https://findfalcone.herokuapp.com/vehicles`);
        const data = await response.json();
        console.log(data);
        setVechile(data);
    }

    useEffect(()=>{
        fetchVehicle();
    },[])
    return (
        <div>
            <form>
                {
                    vechile.map(c => {
                        return(
                            <div>
                                <input type="radio" id="male" name="gender" value={c.name}/>
                                <label for="male">{c.name} ({c.total_no})</label>
                            </div>
                        )
                    })
                }
                <br/>
            </form>
        </div>
    )
}

export default Vechiles
