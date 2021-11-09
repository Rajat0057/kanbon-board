import React, { useState } from 'react'
import { X } from "react-feather"
import './Editable.css'

function Editable(props ) {
    const[showEdit,setShowEdit]=useState(false)
    const[inputValue,setInputValue]=useState("")
    return (
        <div className="editable">
            {
                showEdit ?(
                <form 
                className={'editable_edit ${props.editClass || " "} '}
                onSubmit={(event)=>{
                event.preventDefault();
                if(props.onSubmit)
                {
                    setInputValue("");
                    props.onSubmit(inputValue);
                }
                setShowEdit(false);
                
            }}>
                <input autoFocus type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}  placeholder={props.placeholder}/>
                <div className="editable_edit_footer">
                    <button type="submit">{props.button || "Add"}</button>
                    <X onClick={()=>setShowEdit(false)}/>
                </div>
            </form>
           ) :(
         <p className ={'editable_display  ${props.displayClass || " "}'} onClick={()=>setShowEdit(true)}>{props.text || "Add a Card"}</p>
            )}
 </div>
    );

}

export default Editable;
