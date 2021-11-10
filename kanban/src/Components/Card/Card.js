import React, { useState } from 'react'
import {MoreHorizontal,Edit,Trash2} from "react-feather";
import './Card.css'
import Dropdown from '../Dropdown/Dropdown';
import Chip from '../Chip/Chip';
import CardInfo from "./CardInfo/CardInfo";

function Card(props) {
    const [showDropdown,setShowDropdown]=useState(false);
    const [showModal,setShowModal]=useState(false);
    
    const { id, title} = props.card;

    return (
        <>
           {showModal && (
                 <CardInfo 
                 card={props.card}
                 updateCard={props.updateCard}
                 boardId={props.boardId}
                 onClose={()=>setShowModal(false)}
                 />
            ) }
        <div className="card" draggable
        onDragEnd={()=>props.handleDragEnd(props.card?.id,props.boardId)}
        onDragEnter={()=>props.handleDragEnter(props.card?.id,props.boardId)}
        //  onClick={()=>setShowModal(true)}
        >
      
            <div className="card_top">
                <div className="card_top_labels">
                    {
                        props.card?.labels?.map((item,index) => <Chip
                        key = {index}
                        text={item.text}
                        color={item.color}/>)
                    }                                                
            <div className="card_title">{title}
              </div>  
                </div>                                                        
                <div className="card_top_more" onClick={()=>setShowDropdown(true)}>
                     
                     <Trash2/>
           
            {   showDropdown &&(
                <Dropdown 
                onClose={()=>setShowDropdown(false)}>
                <div className="card_dropdown">
                    <p onClick={()=>props.removeCard(props.card?.id,props.boardId)}>Delete Card</p>
                </div>
                </Dropdown>
                )}
                 </div>  
                <div className="card_top_edit" onClick={()=>setShowModal(true)}>
                    <Edit/>
                    </div>
                
         </div>
        
        </div>
</>
    )
}

export default Card
 