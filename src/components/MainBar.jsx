import ForeCastCards from "./ForeCastCards"
import Highlights from "./Highlights"
import {MainBarDiv,Button,Footer} from "./MainBar.styled"
import { useDispatch,useSelector } from "react-redux"
import apiSliceActions from "../store/api-slice"

function MainBar() {
    const units=useSelector(state=>state.api.units);
    const dispatch=useDispatch();
    function clickHandler(value){
      dispatch(apiSliceActions.setUnits(value));
    }
    
    return (
      <MainBarDiv>
        <div className="temp-buttons">
            <Button onClick={()=>clickHandler('C')}  bg={units==="I"?"gray":''}>°C</Button>
            <Button onClick={()=>clickHandler('F')}  bg={units==="M"?"gray":''}>°F</Button>
        </div>
        <ForeCastCards />
        <Highlights/>
        <Footer>created by Sangeetha Jula 💌 - devChallenges.io </Footer>
      </MainBarDiv>
    )
  }
  
  export default MainBar
  