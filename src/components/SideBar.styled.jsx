import styled,{css} from "styled-components"
import {colors,fonts} from "../assets/styles"

const SideBarDiv=styled.div`
    width:28%;
    display:flex;
    flex-direction:column;
    padding:20px 30px;
    box-sizing:border-box;
    justify-content:space-around;
    align-items:center;
    background-color:${colors.background2};
    @media only screen and (max-width:1199px){
        height:100vh;
        width:100%;
        position:unset;
    }
    @media only screen and (max-width:350px){
        height:unset;
    }
    & .image-icon{
        width:230px;
    }
    
    & .button-div{
        width:100%;
        display:flex;
        justify-content:space-between;

        & button{
            cursor:pointer;
        }
    }
    position:relative;
    &::after{
        content: "";
        background: url(/src/assets/cloud-bg.png);
        opacity: 0.05;
        position: absolute;
        top: 10%;
        width: 100%;
        height:90%;
        background-repeat: no-repeat;
        background-position: top;
    }

    & .temp{
        font-size:88px;
        line-height:20px;
        font-weight:700;
        font-family:${fonts};
        color:${colors.white};
        margin:0;
    }
    & .desc{
        font-size:24px;
        font-family:${fonts};
        color:${colors.gray2};
        font-weight:600;
    }
    & .detail{
        color:${colors.gray2};
        font-family:${fonts};
        margin:0;
        font-weight:500;
        display:flex;
        justify-content:center;
        align-items:center;
        & span{
            display:inline-block;
            margin:5px;
        }
    }
   

`;
const Button=styled.button`
    border:none;
    color:${colors.gray1};
    font-family:${fonts};
    font-size: 16px;
    padding:0.5rem 1rem;
    // opacity:0.6;
    background: #6E707A;
    ${props=>{
        return props.border==="rounded" && css`
        border-radius:50%;
        padding:5px;
        & .my-location{
            vertical-align:middle;
            color:${colors.white};
        }
    `}}
    
    
`

export  {SideBarDiv,Button}