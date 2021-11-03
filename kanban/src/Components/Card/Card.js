import React, { useState } from 'react'
import {MoreHorizontal} from "react-feather";
import './Card.css'
import Dropdown from '../Dropdown/Dropdown';
function Card(props) {
    const [showDropdown,setShowDropdown]=useState(false);
    return (
        <div className="card">
            <div className="card_top">
                                                                         {/* <div className="card_top_labels"> */}
                <div className="card_title">{props.card?.title}
              </div> 
                                                                          {/* </div>      */}
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
         </div>
        </div>
    )
}

export default Card
 