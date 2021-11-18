import React,{useState,useEffect} from 'react'
import "./Board.css"
import {MoreHorizontal} from 'react-feather';
import Editable from '../Editable/Editable';
import Card from "../Card/Card"
import Dropdown from '../Dropdown/Dropdown';
function Board(props)
 {
 
 /**
 * Intial the output array to store the searchbox value
 * 
 */   

const[output,setOutput]=useState([]);
    
const [showDropdown,setShowDropdown]=useState(false);

/**
 * Hooks for Set the array with Searching card value
 * 
 */
useEffect(() => {
    setOutput([])
   props.board?.cards.filter(val=>{
      if(val.title.toLowerCase().includes(props?.input.toLowerCase())){
        setOutput(output=>[...output,val])
      }
    })
     }, [props.input])

return (
<div className="board" >
     <div className="board_top" >
         <p className="board_top_title" >{props.board?.title} </p>

{/***  Event for Delete any board from kanban ************/}
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
{/** Pass the board and card details to the card component ************/}

            <div className="board_cards custum-scroll" >
                {            
/**
 * Condition for display only on the search-card 
 * 
 */
                 props.input ?(
                 output.map((item=><Card
                    key={item.id}
                    card={item}
                    removeCard={props.removeCard}
                    boardId={props.board.id}
                    handleDragEnd={props.handleDragEnd}
                    handleDragEnter={props.handleDragEnter}
                    updateCard={props.updateCard}
                    />))
                 ):(
 
/**
 * Condition for display all card in boards
 * 
 */               
                      props.board?.cards.map((item=><Card
                    key={item.id}
                    card={item}
                    removeCard={props.removeCard}
                    boardId={props.board.id}
                    handleDragEnd={props.handleDragEnd}
                    handleDragEnter={props.handleDragEnter}
                    updateCard={props.updateCard}
                    />))
                 )
                } 
{/***** Calling Add card function with other card details******* */}

            <div onDragEnter={()=>props.handleDragEnter(props.card?.id,props.board?.id)}>
                <Editable displayClass="boards_cards_add" text="+ Add Card"  placeholder="Enter Card Title"
                onSubmit={(value)=>props.addCard(value,props.board?.id)}/>
             </div>
      </div>
</div>
     
    )
}

export default Board

