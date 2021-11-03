import React,{useState} from 'react'
import "./Board.css"
import {MoreHorizontal} from 'react-feather';
import Editable from '../Editable/Editable';
import Card from "../Card/Card"
import Dropdown from '../Dropdown/Dropdown';
function Board(props) {
    const [showDropdown,setShowDropdown]=useState(false);
    return (
        <div className="board">
            {/* <div className="board_cards"> */}
                <div className="board_top">
            <p className="board_top_title">{props.board?.title}</p>
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
            <div className="board_cards custum-scroll">
                {
                    props.board?.cards?.map((item=><Card
                    key={item.id}
                    card={item}
                    removeCard={props.removeCard}
                    boardId={props.board?.id}
                    />))
                }     
            {/* <Card/> */}
            <Editable  displayClass="boards_cards_add" text="Add Card"  placeholder="Enter Card Title"
            onSubmit={(value)=>props.addCard(value,props.board?.id)}/>
            {/* </div> */}
            </div>
        </div>
    )
}

export default Board