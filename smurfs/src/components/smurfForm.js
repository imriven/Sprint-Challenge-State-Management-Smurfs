import React, {useContext , useState} from "react"
import { addSmurf } from "../actions"
import { SmurfContext } from "../context"

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
        <div>
             <form onSubmit={handleAdd}>
        
          <label htmlFor="name">
            Name: 
            <input
              id="name"
              type="text"
              name="name"
              value={formState.name}
              onChange={handleChange}
              placeholder="Please Enter your Name"
            />
          </label>
          <label htmlFor="height">
            Height: 
            <input
              id="height"
              type="text"
              name="height"
              value={formState.height}
              onChange={handleChange}
              placeholder="Please Enter Height"
            />
          </label>
          <label htmlFor="age">
            Age: 
            <input
              id="age"
              type="text"
              name="age"
              value={formState.age}
              onChange={handleChange}
              placeholder="Please Enter Age"
            />
          </label>
          <button onClick={handleAdd}>Add Smurf</button>
          </form>
        </div>
    )

}

export default SmurfForm