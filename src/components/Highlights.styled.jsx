import styled from "styled-components"
import {colors,fonts} from "../assets/styles"


const Highlight=styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:30px;
    font-family:${fonts};
    @media only screen and (max-width:1199px){
        padding:0;
    }
    h4{
        font-size:24px;
        font-weight:700;
        color:${colors.white};
        
    }
    button{
        color:${colors.black};
        font-weight:700;
    }
   
`
const Button=styled.button`
    border:none;
    color:${colors.gray2};
    font-family:${fonts};
    font-size: 16px;
    padding:1rem;
    
`

export {Highlight,Button}