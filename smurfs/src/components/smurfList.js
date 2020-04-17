import React, {useContext} from "react"
import Smurf from "./smurf"
import { SmurfContext } from "../context"
import { CardContainerDiv} from "../styles"

const SmurfList = () => {
    const { state } = useContext(SmurfContext);
    
    return (
        <CardContainerDiv>
            {state.smurfs.map(smurf => <Smurf smurf={smurf} />)}
        </CardContainerDiv>
    )

}

export default SmurfList