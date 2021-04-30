import React from 'react'
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import "./Selection.css";
const Selection = ({planet, vechile}) => {
    return (
        <>
            <div className="selection">
                <FormControl >
                    <h2 style={{fontFamily: "monospace"}}>Destination 1</h2>
                    <Select>
                        {
                            planet.map(c => <MenuItem value={c.name}>{c.name}</MenuItem>)
                        }
                    </Select>
                </FormControl>
                
            </div>

            <div className="selection">
                <FormControl >
                    <h2 style={{fontFamily: "monospace"}}>Destination 2</h2>
                    <Select>
                        {
                            planet.map(c => <MenuItem value={c.name}>{c.name}</MenuItem>)
                        }
                    </Select>
                </FormControl>
            </div>

            <div className="selection">
                <FormControl >
                    <h2 style={{fontFamily: "monospace"}}>Destination 3</h2>
                    <Select>
                        {
                            planet.map(c => <MenuItem value={c.name}>{c.name}</MenuItem>)
                        }
                    </Select>
                </FormControl>
            </div>

            <div className="selection">
                <FormControl >
                    <h2 style={{fontFamily: "monospace"}}>Destination 4</h2>
                    <Select>
                        {
                            planet.map(c => <MenuItem value={c.name}>{c.name}</MenuItem>)
                        }
                    </Select>
                </FormControl>
            </div>
        </>
    )
}

export default Selection