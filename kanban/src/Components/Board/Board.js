import React,{useState,useEffect,useRef} from 'react'
import "./Board.css"
import {MoreHorizontal,Trash2} from 'react-feather';
import Editable from '../Editable/Editable';
import Card from "../Card/Card"
import Dropdown from '../Dropdown/Dropdown';
function Board(props)
 {
    //  console.log(props);
    //  alert(props.term);
    const [showDropdown,setShowDropdown]=useState(false);
     const[searchTerm,setSearchTerm]=useState("");







    return (
        <div className="board" 
        // onDragEnter={()=>handleDragEnter(props.card?.id,props.boardId)}
         >
                 {/* <div className="input-group">
       <input type="text" className="form-control" placeholder="Search" onChange={e=>setInput(e.target.value)}/>
       </div> */}
         {/* <div className="Output">
         {output?.map((item=><Card
                    // key={item.id}
                    card={item}
                    removeCard={props.removeCard}
                    // boardId={board.id}
                    updateCard={props.updateCard}
                     />))
         }
         </div> */}
           <div className="board_top"   >
            <p className="board_top_title"    >{props.board?.title}</p>

            {/***************  DropDown Event for Delete any board from kanban ****************/}
            <div className="board_top_more" onClick={()=>setShowDropdown(true)}>
            <MoreHorizontal/>
            {
                showDropdown &&(
                <Dropdown 
                onClose={()=>setShowDropdown(false)}>
                <div className="board_dropdown">
                    <p onClick={()=>props.removeBoard(props.board?.id)}>Delete Board</p>
                </div>
                </Dropdown>
                )}
           </div>
            </div>
            {/************** Pass the board and card details to the card component ********************/}
            <div className="board_cards custum-scroll" >
                {
             

                 props.board?.cards?.map((item=><Card
                //  output.map((item=><Card
                    key={item.id}
                    card={item}
                    removeCard={props.removeCard}
                    boardId={props.board.id}
                    handleDragEnd={props.handleDragEnd}
                    handleDragEnter={props.handleDragEnter}
                    // onDragStart={props.onDragStart}
                    // onDragOver={props.onDragOver}
                    updateCard={props.updateCard}
                    
                    // onDrop={props.onDrop}

                    />))
                } 
            {/*********************** Calling Add card function with other card details*************  */}
            <div onDragEnter={()=>props.handleDragEnter(props.card?.id,props.board?.id)}>
            <Editable displayClass="boards_cards_add" text="+ Add Card"  placeholder="Enter Card Title"
            onSubmit={(value)=>props.addCard(value,props.board?.id)}/> </div>
            </div>
        </div>
    )
}

export default Board

