import Styled from "styled-components"
import Background from "../media/smurfsBackground.jpg"
import { titleKeyFrame } from "../media/keyframes"



//Main Page

export const ImageBackground = Styled.div `
display: flex;
justify-content:center;
background-image: url(${Background});
background-size:cover;
height: 100vh;
`
export const ContainerDiv = Styled.div`
display:flex;
flex-direction: column;
text-align: center;
width: 30%;
margin-right: 8%;
font-family: 'Handlee', cursive;
`

export const TitleDiv = Styled.div`
animation: ${titleKeyFrame} 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
`

export const ExcellentHeader = Styled.h1 `
font-family: 'Chewy', cursive;
padding: 2%;
margin: 20% 0 5% 0; 
font-size: 2em;
`
//Form
export const AwesomeInput = Styled.input `
display:flex;
justify-content:center;
text-align: center;
color: blue;
font-size: 1rem;
background: transparent;
border: none;
border-bottom: 2px dotted blue;
padding: .5% 3%;
width: 80%;
height: 10%;
margin: 8% 0;
text-shadow: 2px 2px 2px lightGray;
outline:none;
flex-wrap: nowrap;
`
export const AwesomeLabel = Styled.label `
margin: 5% 3%;
`

export const FormContainerDiv = Styled.div`
display:flex;
justify-content: center;
text-align: left;
padding: 5%;
margin: 2%;
color:royalBlue;
`

export const AwesomeButton = Styled.button `
box-shadow: 5px 5px 8px blue;
height: 20%;
border-radius: 5px;
font-size: .7em;
margin: 5% 1%;
outline:none;
width: 80%;
background: linear-gradient(blue, cornFlowerBlue);
color:lightBlue;
`
//Smurf List

export const CardContainerDiv = Styled.div`
display:flex;
justify-content: center;
text-align: center;
width: 95%;
margin: 2%;
`

//Smurf Card

export const CardDiv = Styled.div`
width: 20%;
text-align: center;
background-color: dodgerBlue;
margin: 2%;
padding:2%;
color: white;
border-radius: 15px;
box-shadow: 5px 5px 5px blue;
`