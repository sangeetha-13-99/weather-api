import {SideBarDiv,Button} from  "./SideBar.styled"
import { useSelector,useDispatch } from "react-redux"
import ModalContext from "../store/modal-context"
import { useContext} from "react"
import searchSliceActions from "../store/search-slice"

function SideBar() {
    const todaysWeather=useSelector(state=>state.api.data)[0];
    const city=useSelector(state=>state.search.city);
    const context=useContext(ModalContext);
    const dispatch=useDispatch();
    let units=useSelector(state=>state.api.units);
    function onSuccess(position){
        dispatch(searchSliceActions.setCurrentLocation({lat:position.coords.latitude,lon:position.coords.longitude}))
    }
    function onFailure(){
        console.log('failure');
    }
    const getCurrentLocation=()=>{
        navigator.geolocation.getCurrentPosition(onSuccess,onFailure)
    }
    let degree=units==="M"?"C":"F";
    return (
        <SideBarDiv>
            <div className="button-div">
                <Button onClick={context.openModal}>Search for places</Button>
                <Button border="rounded" onClick={getCurrentLocation}><span className="material-symbols-outlined my-location">my_location</span></Button>
            </div>
            <img className="image-icon" src={todaysWeather.icon}/>
            <p ><span className="temp">{todaysWeather.temp}</span><span className="desc">°{degree}</span></p>
            <p className="desc">{todaysWeather.description}</p>
            <div className="detail">
                <span>Today  •</span>
                <span>{todaysWeather.date.day},{todaysWeather.date.date} {todaysWeather.date.month}</span>
            </div>
            <p className="detail">
                <span className="material-symbols-outlined">location_on</span>
                <span>{city}</span>
            </p>
        </SideBarDiv>
    )
}
  
export default SideBar