import React, { useContext } from "react"
import { deleteSmurf } from "../actions"
import { SmurfContext} from "../context"

const Smurf = props => {
    const {dispatch} = useContext(SmurfContext)
    const handleRemove = e => {
        e.preventDefault()
        deleteSmurf(dispatch, props.smurf.id)
    }

    return (
        <div>
            <p> Name: {props.smurf.name}</p>
            <p> Height: {props.smurf.height}</p> 
            <p> Age: {props.smurf.age}</p>
            <button onClick={handleRemove}>Remove Smurf</button>
        </div>
    )

}

export default Smurf