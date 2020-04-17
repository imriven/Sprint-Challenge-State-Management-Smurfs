import React, { useReducer, useEffect } from 'react';
import './App.css';
import { SmurfContext } from "../context"
import { reducer, initialState } from "../reducers"
import SmurfList from "./smurfList"
import { getSmurfs } from "../actions"
import { Loader } from "react-loader-spinner"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import SmurfForm  from "./smurfForm"
import  { ImageBackground }  from "../styles"
import { ContainerDiv } from "../styles"
import { ExcellentHeader }  from "../styles"
import { TitleDiv } from "../styles"

 /*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
function App() {

  const [state, dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
    getSmurfs(dispatch)
  }, [])
 
    return (
      <SmurfContext.Provider value={{state, dispatch}}>
      <ImageBackground>
        <ContainerDiv>
          <TitleDiv>
        <ExcellentHeader>SMURFS! 2.0 W/ Redux</ExcellentHeader>
        </TitleDiv>
        {state.isFetching && <Loader
         type="Puff"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={3000} //3 secs
 
      />}
      {state.error && <p>{state.error}</p>}
        <SmurfList />
        <SmurfForm />
        </ContainerDiv>
      </ImageBackground>
    </SmurfContext.Provider>
    );

}

export default App;
