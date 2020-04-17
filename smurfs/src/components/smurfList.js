import React, {useContext} from "react"
import Smurf from "./smurf"
import { SmurfContext } from "../context"

const SmurfList = () => {
    const { state } = useContext(SmurfContext);
    
    return (
        <div>
            {state.smurfs.map(smurf => <Smurf smurf={smurf} />)}
        </div>
    )

}

export default SmurfList