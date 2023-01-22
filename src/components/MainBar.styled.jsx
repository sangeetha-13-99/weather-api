import styled from "styled-components"
import {colors,fonts} from "../assets/styles"
const MainBarDiv=styled.div`
    height:100vh;
    width:70%;
    margin:0;
    padding:30px;
    overflow-y:scroll;
    box-sizing:border-box;
    @media only screen and (max-width:1199px){
        height:unset;
        width:100%;
        overflow-y:initial;
    }

    & .temp-buttons{
        display:flex;
        justify-content:flex-end;
        padding:10px 10px;
        @media only screen and (max-width:1199px){
            justify-content:center;
        }
    }
`;

const Button=styled.button`
    border:none;
    font-family:${fonts};
    font-size: 16px;
    font-weight:700;
    padding:1rem 1.1rem;
    border-radius:50%;
    background:${(props)=>props.bg==="gray"?colors.gray2:colors.white};
    color:${(props)=>props.bg==="gray"?colors.white:colors.black};
    margin:10px;
    cursor:pointer;
`
const Footer=styled.p`
    color:${colors.gray2};
    font-family:${fonts};
    font-size: 16px;
    font-weight:700;

`
export {MainBarDiv,Button,Footer}