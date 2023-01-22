import { useSelector,useDispatch } from "react-redux"
import searchSliceActions from "../store/search-slice"
import { useContext } from "react";
import ModalContext from "../store/modal-context";
import {Button,Result} from "./Results.styled"

function Results() {
  const dispatch=useDispatch();
  const context=useContext(ModalContext);
  function resultClickHandler(locationObject){
    dispatch(searchSliceActions.setCurrentLocation(locationObject));
    context.closeModal();
    dispatch(searchSliceActions.setSearchCity(''));
    dispatch(searchSliceActions.setsearchData([]));
  }
  let resultData=useSelector(state=>state.search.data);
    resultData=resultData.map((data)=>{
      return (
        <Button key={data.id} onClick={()=>resultClickHandler(data.latLong)}><span>{data.name},{data.country}</span><span className="material-symbols-outlined result">
        arrow_forward_ios
        </span></Button>
      )
    })
    return (
     <Result>
       {resultData}
     </Result>
    )
  }
  
  export default Results