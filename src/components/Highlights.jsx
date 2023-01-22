import { Wrapper,Card,MinMax } from "./Card.styled"
import {  Highlight,Button} from "./Highlights.styled";
import { Fragment } from "react"
import { useSelector ,useDispatch} from "react-redux"
import  highlightSliceActions  from "../store/highlight-slice";

function Highlights() {
    const dispatch=useDispatch();
    const highlight=useSelector(state=>state.highlight.activeHighlight);
    let units=useSelector(state=>state.api.units);
    let data=useSelector(state=>state.api.data);
    data=data[highlight];
    const wind=data.highlights.wind;
    const humidity=data.highlights.humidity;
    const visibility=data.highlights.visibility;
    const pressure=data.highlights.pressure;
const date=data.date;
    function clickHandler(){
        dispatch(highlightSliceActions.setactiveHighlight(0));
    }
    return (
        <Fragment>
            <Highlight>
                <h4> {highlight==0?"Today's":highlight==1?" Tomorrow ":`${date.day} , ${date.date} ${date.month}`} Highlights</h4>
                {highlight>0 && <Button onClick={clickHandler}>Get Today's</Button>}
            </Highlight>
            <Wrapper>
                <Card width="250" >
                    <p className="heading">Wind status</p>
                    <p><span className="status">{wind.speed}</span><span className="unit">{units==="M"?'m/s':'mph'}</span></p>
                    <MinMax direction={wind.degree}>
                        <span className="material-symbols-outlined navigation">assistant_navigation</span>
                        <span>{wind.direction}</span>
                    </MinMax>
                </Card>
                <Card width="250">
                    <p className="heading">Humidity</p>
                    <p><span className="status">{humidity.percentage}</span><span className="unit">%</span></p>
                    <MinMax >
                        <label htmlFor="progress" className="progress">
                            <div className="progress-perc">
                                <span>0</span>
                                <span>50</span>
                                <span>100</span>
                            </div>
                            <progress id="progress" value={humidity.percentage} max="100"/>
                            <div className="progress-perc perc2">
                                <span>%</span>
                            </div>
                        </label>
                    </MinMax>
                </Card>
                <Card width="250">
                    <p className="heading">Visibility</p>
                    <p>
                    <span className="status">{visibility.vis}</span><span className="unit">{units==="M"?'km':'miles'}</span>
                    </p>
                    
                </Card>
                <Card width="250">
                    <p className="heading">Air Pressure</p>
                    <p><span className="status">{pressure.pres}</span><span className="unit">mb</span></p>
                </Card>
            </Wrapper>
        </Fragment>
    )
  }
  
  export default Highlights