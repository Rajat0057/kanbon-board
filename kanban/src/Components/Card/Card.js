import React, { useState } from 'react'
import {MoreHorizontal,Edit} from "react-feather";
import './Card.css'
import Dropdown from '../Dropdown/Dropdown';
import Chip from '../Chip/Chip';
import CardInfo from "./CardInfo/CardInfo";

function Card(props) {
    const [showDropdown,setShowDropdown]=useState(false);
    const [showModal,setShowModal]=useState(false);
    const {title} = props.card;


return (
 /**
 * Cardinfo component for the Edit card and boardId and card to updated text 
 * 
 */   
        <>
           {showModal && (
                 <CardInfo 
                 card={props.card}
                 updateCard={props.updateCard}
                 boardId={props.boardId}
                 onClose={()=>setShowModal(false)}
                 />
            ) }
            
 {/********** Make card Draggable for the darg and adrop and borad and card into function /*/}
        
    <div className="card" draggable
        onDragEnd={()=>props.handleDragEnd(props.card?.id,props.boardId)}
        onDragEnter={()=>props.handleDragEnter(props.card?.id,props.boardId)}>
            <div className="cardTop">
                <div className="cardTopLabels">
                    {
                        props.card?.labels?.map((item,index) => <Chip
                        key = {index}
                        text={item.text}
                        color={item.color}/>)
                    }  
                  <div className="cardTitle" >{title} 
                     </div>  
                </div>      
 {/*******************DropDown for the removecard and edit card options*****************************/}
                <div className="cardTopMore" onClick={()=>setShowDropdown(true)}>         
                     <MoreHorizontal/>
                 {   
                   showDropdown &&(
                    <Dropdown 
                    onClose={()=>setShowDropdown(false)}>
                    <div className="cardDropDown">
                        <p onClick={()=>props.removeCard(props.card?.id,props.boardId)}>Delete Card</p>
                    </div>
                    </Dropdown>
                    )}
                 </div>  

{/*******************Div for the edit card symbol **********************************************/}              
                <div className="cardTopEdit" onClick={()=>setShowModal(true)}>
                    <Edit/>
                </div>
                
            </div>  
    </div>
</>
    )
}

export default Card
 