import React, {useContext , useState} from "react"
import { addSmurf } from "../actions"
import { SmurfContext } from "../context"
import { AwesomeButton, AwesomeInput, FormContainerDiv, AwesomeLabel  } from "../styles"

const SmurfForm = () => {
    const { dispatch } = useContext(SmurfContext);
    const [formState, setFormState] = useState({
        name: "",
        height: "",
        age: "", 
      });

    const handleAdd = e => {
        e.preventDefault()
        addSmurf(dispatch, formState)

    }
    const handleChange = e => {
        e.persist()
        setFormState(previous => ({...previous, [e.target.name]: e.target.value}))
    }

    return (
        <FormContainerDiv>
             <form onSubmit={handleAdd}>
        
          <AwesomeLabel htmlFor="name">
            Name: 
            <AwesomeInput
              id="name"
              type="text"
              name="name"
              value={formState.name}
              onChange={handleChange}
              placeholder="Enter Name"
            />
          </AwesomeLabel>
          <AwesomeLabel htmlFor="height">
            Height: 
            <AwesomeInput
              id="height"
              type="text"
              name="height"
              value={formState.height}
              onChange={handleChange}
              placeholder="Enter Height"
            />
          </AwesomeLabel>
          <AwesomeLabel htmlFor="age">
            Age: 
            <AwesomeInput
              id="age"
              type="text"
              name="age"
              value={formState.age}
              onChange={handleChange}
              placeholder="Enter Age"
            />
          </AwesomeLabel>
          <AwesomeButton onClick={handleAdd}>Add Smurf</AwesomeButton>
          </form>
        </FormContainerDiv>
    )

}

export default SmurfForm