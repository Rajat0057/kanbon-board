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

//   const inputE1=useRef("");
//     const getSearchTerm=()=>{

// };

// const getSearchTerm=()=>{
// console.log(inputE1.current.value);
// };

  const[input,setInput]=useState("");
  const[output,setOutput]=useState([]);

  // useEffect(() => {
  //   setOutput([])
  //  props.board?.cards.filter(val=>{
  //     if(val.title.toLowerCase().includes(input.toLocaleLowerCase())){
  //       setOutput(output=>[...output,val])
  //       // console.log(output)
  //       // alert(output)
  //     }
  //   })
  //    }, [input])




    return (
        <div className="board">
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
           <div className="board_top">
            <p className="board_top_title">{props.board?.title}</p>

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
            <div className="board_cards custum-scroll">
                {
                    // props.board?.cards?.map((item=><Card
                    // key={item.id}
                    // card={item}
                    // removeCard={props.removeCard}
                    // boardId={props.board.id}
                    // handleDragEnd={props.handleDragEnd}
                    // handleDragEnter={props.handleDragEnter}
                    // updateCard={props.updateCard}
                    // searchTerm={props.searchTerm}
                    // term={props.searchTerm}
                    // searchkeyword={props.searchHandler}

                 props.board?.cards?.map((item=><Card
                //  output.map((item=><Card
                    key={item.id}
                    card={item}
                    removeCard={props.removeCard}
                    boardId={props.board.id}
                    handleDragEnd={props.handleDragEnd}
                    handleDragEnter={props.handleDragEnter}
                    updateCard={props.updateCard}

                    />))
                } 
            {/*********************** Calling Add card function with other card details*************  */}
            <Editable  displayClass="boards_cards_add" text="+ Add Card"  placeholder="Enter Card Title"
            onSubmit={(value)=>props.addCard(value,props.board?.id)}/>
            </div>
        </div>
    )
}

export default Board

