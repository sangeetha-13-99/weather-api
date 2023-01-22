import { Wrapper,Card,MinMax } from "./Card.styled"
import { useSelector,useDispatch } from "react-redux"
import highlightSliceActions from "../store/highlight-slice";
function ForeCastCards() {
    const dispatch=useDispatch();
    let data=useSelector(state=>state.api.data);
    let units=useSelector(state=>state.api.units);
    data=data.slice(1);
    function clickHandler(index){
        dispatch(highlightSliceActions.setactiveHighlight(index));
    }
    let degree=units==="M"?"C":"F";
    return (
        <Wrapper>
            {
                data.map((item,index)=>{
                    const {date,maxTemp,minTemp,id,icon}=item;
                    return (
                        <Card width="140" key={id} clickable="true" onClick={()=>clickHandler(index+1)}>
                            <p>{index==0?"Tomorrow":`${date.day},${date.date}${date.month}`}</p>
                            <img src={icon} className="forecast-icon"/>
                            <MinMax>
                                <p>{maxTemp}°{degree}</p>
                                <p>{minTemp}°{degree}</p>
                            </MinMax>
                        </Card>
                    )
                })
            }
        </Wrapper>
    )
}
  
  export default ForeCastCards
  