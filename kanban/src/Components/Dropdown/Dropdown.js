import React, {useEffect,useRef} from "react";
import "./Dropdown.css"
 
/**
 * Dropdaown for delete card and board 
 * 
 */
function Dropdown(props) {
    const dropdownRef=useRef();
    const handleClick=(event)=>{
      if(dropdownRef && !dropdownRef?.current?.contains(event?.target)&&
     props.onClose ) props.onClose();

    };
    useEffect(()=>{
        document.addEventListener('click',handleClick);

        return ()=>{
            document.removeEventListener('click',handleClick);
        };
    });
    return (
        <div ref={dropdownRef} className={`dropdown custum-scroll ${props.class?props.class: " "}`}>
            {props.children}
        </div>
    );
}

export default Dropdown
