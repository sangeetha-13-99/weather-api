import styled from "styled-components"
import {colors,fonts} from "../assets/styles"
const Button=styled.button`
    border:none;
    color:${colors.gray2};
    font-family:${fonts};
    font-size: 16px;
    padding:1rem;
    ${(props)=>{
        return props.border==="rounded" && css`
            border-radius:50%;
        `
    }}
    background:${(props)=>props.bg==="blue"?colors.blue1:colors.buttonBacground};
    
`

export {Button}