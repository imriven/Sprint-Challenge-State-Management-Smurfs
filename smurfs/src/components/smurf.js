import React, { useContext } from "react"
import { deleteSmurf } from "../actions"
import { SmurfContext} from "../context"
import  { CardDiv, AwesomeButton }  from "../styles"


const Smurf = props => {
    const {dispatch} = useContext(SmurfContext)
    const handleRemove = e => {
        e.preventDefault()
        deleteSmurf(dispatch, props.smurf.id)
    }

    return (
        <CardDiv>
            <p> Name: {props.smurf.name}</p>
            <p> Height: {props.smurf.height}</p> 
            <p> Age: {props.smurf.age}</p>
            <AwesomeButton onClick={handleRemove}>Remove</AwesomeButton>
        </CardDiv>
    )

}

export default Smurf