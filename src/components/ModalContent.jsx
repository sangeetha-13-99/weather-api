import Modal from "./Modal"
import Results from "./Results"
import { useRef,useEffect ,useContext} from "react"
import { useDispatch,useSelector } from "react-redux"
import searchSliceActions from "../store/search-slice"
import {setSearchAction} from "../store/search-slice"
import ModalContext from "../store/modal-context"
import { Button } from "./Modal.styled"

function ModalContent() {
    const initial=useRef(true);
    const dispatch=useDispatch();
    const inputRef=useRef();
    const results=useSelector(state=>state.search.data);
    const searchCity=useSelector(state=>state.search.searchCity);
    const context=useContext(ModalContext);

    useEffect(()=>{
      if(searchCity=="" || initial.current){
        initial.current=false;
      }
      else{
        dispatch(setSearchAction());
      }
    },[searchCity,dispatch,initial.current]);

    function searchHandler(){
      if(inputRef.current.value.trim()!==""){
        dispatch(searchSliceActions.setSearchCity(inputRef.current.value));
        inputRef.current.value="";
      }
    }

    return (
      <Modal>
        <div onClick={context.closeModal} className="close"><span className="material-symbols-outlined">close</span></div>
        <div class="search-input">
          <label htmlFor="search" ><span className="material-symbols-outlined search-icon">search</span><input id="search" placeholder="search location" ref={inputRef} /></label>
          <Button bg="blue" onClick={searchHandler}>Search</Button>
        </div>
        {results.length>0 && <Results/>}
      </Modal>
    )
  }
  
  export default ModalContent