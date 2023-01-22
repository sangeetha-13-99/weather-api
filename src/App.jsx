import './App.css'
import SideBar from './components/SideBar'
import MainBar from './components/MainBar'
import { useEffect,useContext, Fragment } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { setApi } from './store/api-slice'
import ModalContext from "./store/modal-context"
import ModalContent from './components/ModalContent'

function App() {
  const data=useSelector(state=>state.api.data)
  const {lat,lon}=useSelector(state=>state.search.currentLocation);
  let units=useSelector(state=>state.api.units);
  const dispatch =useDispatch();
  const context=useContext(ModalContext);
  useEffect(()=>{
    dispatch(setApi());
  },[lat,lon,units,dispatch]);
  return (
    <div className="App">
       {context.isModal && <ModalContent/>}
       { data.length>0 && 
        <Fragment>
          <SideBar />
          <MainBar />
        </Fragment>
       }
    </div>
  )
}

export default App
