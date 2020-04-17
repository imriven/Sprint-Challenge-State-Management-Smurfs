import Styled, { createGlobalStyle }from "styled-components"
import Background from "../media/smurfsBackground.jpg"
import { titleKeyFrame } from "../media/keyframes"
import importGoogleFonts from 'import-google-fonts'




//Set Fonts

const GoogleFonts = importGoogleFonts(createGlobalStyle, null [
    "Chewy",
    "Handlee"
])


//Image Backgrounds:


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
width: 80%;
font-family: 'Handlee', cursive;
`

export const TitleDiv = Styled.div`
animation: ${titleKeyFrame} 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
`

export const ExcellentHeader = Styled.h1 `
font-family: 'Chewy', cursive;
padding: 2%;
margin-top: 30%;
font-size: 2em;
`

