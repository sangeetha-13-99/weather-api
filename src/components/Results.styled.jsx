import styled from "styled-components"
import {colors,fonts} from "../assets/styles"

const Result=styled.div`
    width:100%;
    margin:1rem auto;
    & span{
        display:inline-block;
        vertical-align:middle;
        font-size:1rem;
    }

`;
const Button=styled.button`
    display:flex;
    justify-content:space-between;
    background:none;
    border:none;
    color:${colors.gray2};
    font-family:${fonts};
    margin:1rem 0;
    font-size: 16px;
    padding:1rem;
    width:100%;
    &:hover{
        border: 1px solid ${colors.gray2};
    }
    
`

export {Button,Result}