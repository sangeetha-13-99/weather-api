import styled from "styled-components"
import {colors,fonts} from "../assets/styles"


const Overlay=styled.div`
    background:${colors.background2};
    z-index:2;
    position:fixed;
    height:100%;
    width:28%;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    padding:30px 15px;
    box-sizing:border-box;
    @media only screen and (max-width:1199px){
        width:100%;
    }
    & .close{
        align-self:flex-end;
        padding:10px 0;
        color:${colors.white};
    }
    & .search-input{
        width:100%;
        display:flex;
        justify-content:space-between;
        & label{
            display:inline-block;
            width:60%;
            padding:0.8rem;
            border: 1px solid ${colors.gray1};
            & input, & input::placeholder,& .search-icon{
                color:${colors.gray2};
                font-size:1rem;
                font-weight:500;
                vertical-align: middle;
            }
            & .search-icon{
                font-size:1.5rem;
                padding-right:5px;
            }
            & input{
                width:60%;
                font-family:${fonts};
                outline:none;
                background:none;
                border:none;
                color:${colors.white};
            }
        }
    }

`;

const Button=styled.button`
    border:none;
    width:28%;
    color:${colors.white};
    font-family:${fonts};
    font-size: 16px;
    padding:1rem;
    background:${colors.blue1};
    
`

export {Button,Overlay}