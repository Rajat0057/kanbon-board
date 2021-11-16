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

//        card.forEach(Element => {
//     console.log("all cards",Element?.cards?.title);
    
//   });
  


    return (
        /////////////////////Cardinfo component for the Edit card and boardId and card to updated text
        
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
        
        //   onDragStart = {(e) => props.onDragStart(e, title)}
       
        >
      
            <div className="card_top">
                <div className="card_top_labels">
                    {
                        props.card?.labels?.map((item,index) => <Chip
                        key = {index}
                        text={item.text}
                        color={item.color}/>)
                    }  
                    {/* {console.log(title)}                                               */}
            <div className="card_title" >{title}
            
              </div>  

                 {/* <div className="card_title"  onDragOver={(e)=>props.onDragOver(e)} 
                  onDrop={(e)=>props.onDrop(e,props.boardId)}>{title}
              </div>   */}
                </div>      
 {/*******************DropDown for the removecard and edit card options***********************************************/}
                <div className="card_top_more" onClick={()=>setShowDropdown(true)}>         
                     <MoreHorizontal/>
            {   
            showDropdown &&(
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
 