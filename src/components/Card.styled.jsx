import styled,{css} from "styled-components"
import {colors,fonts} from "../assets/styles"

const Wrapper=styled.div`
    display:flex;
    flex-wrap:wrap;
    gap:15px;
    justify-content:space-between;
    align-items:center;
    padding:20px ;
    @media only screen and (max-width:1199px){
        padding:0;
        justify-content:center;
    }
`;

const Card=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    min-height:200px;
    width:${(props)=>props.width}px;
    background:${colors.background2};
    color:${colors.gray1};
    font-family:${fonts};
    padding:10px 20px;
    font-size:16px;
    letter-spacing:0.1rem;
    & .forecast-icon{
        width:80px;
        height:80px;
    }
    ${props=>props.clickable=="true" && css`
        cursor:pointer;
    `}
    & .status{
        font-size:48px;
        line-height:42px;
        font-weight:700;
        margin-right:10px;
    }
    & .unit{
        font-size:24px;
        line-height:42px;
        font-weight:500;
    }
    
    & .progress{
        width:100%;
        & .progress-perc{
            width:100%;
            display:flex;
            justify-content:space-between;

        }
        & .progress-perc.perc2{
            justify-content:flex-end;
        }
        & .progress-perc span{
            display:inline-block;
        }
    }
        progress {
        width:100%;
        border: none;
        border-radius:20px;
        height:10px;
        background: ${colors.white};
        color: ${colors.yellow1};
      }
      progress::-moz-progress-bar {
        background: ${colors.white};
        border-radius:20px;
      }
      
      progress::-webkit-progress-value {
        background: ${colors.yellow1};
        border-radius:20px;
      }
      
      progress::-webkit-progress-bar {
        background: ${colors.white};
        border-radius:20px;
      }
    @media only screen and (max-width:1199px){
        width:${(props)=>props.width < 250 ? `${props.width-25}px`: `${100}%` };
    }
`;

const MinMax=styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    ${(props)=>{
        return props.direction && css`
        justify-content:center;
        gap:10px;
        & .navigation{
            width:40px;
            transform:rotate(${props.direction}deg);
            
        }`
    }}
`;



export {Wrapper,Card,MinMax};