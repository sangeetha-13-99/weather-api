import { createContext } from "react";
import { useState } from "react";
const ModalContext=createContext({
    isModal:false,
    openModal:()=>{},
    closeModal:()=>{},
});


export const ModalContextProvider=function(props){
    const [isModal,setIsModal]=useState(false);
    function closeModal(){
        setIsModal(false);
    }
    function openModal(){
        setIsModal(true);
    }
    return(
        <ModalContext.Provider value={{
            isModal,
            closeModal,
            openModal
        }}>
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalContext;