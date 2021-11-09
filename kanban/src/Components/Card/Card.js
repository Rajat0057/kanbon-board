import React, { useState } from 'react'
import {MoreHorizontal} from "react-feather";
import './Card.css'
import Dropdown from '../Dropdown/Dropdown';
import Chip from '../Chip/Chip';
function Card(props) {
    const [showDropdown,setShowDropdown]=useState(false);
    
    const { id, title} = props.card;
    return (
        <div className="card" draggable
        onDragEnd={()=>props.handleDragEnd(props.card?.id,props.boardId)}
        onDragEnter={()=>props.handleDragEnter(props.card?.id,props.boardId)}
        >
            <div className="card_top">
                <div className="card_top_labels">                                               
                  <div className="card_title">{title} </div> 
                </div>                                                        
                <div className="card_top_more" onClick={()=>setShowDropdown(true)}>
            <MoreHorizontal/>
            {   showDropdown &&(
                <Dropdown 
                onClose={()=>setShowDropdown(false)}>
                <div className="card_dropdown">
                    <p onClick={()=>props.removeCard(props.card?.id,props.boardId)}>Delete Card</p>
                </div>
                </Dropdown>
                )}
                </div>
           </div> 
        </div>

    )
}

export default Card
 