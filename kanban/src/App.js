import React, { useState } from 'react'
import './App.css';
import Board from "./Components/Board/Board"
import Editable from './Components/Editable/Editable';

 /**
 * functional component for the board and card fields like (unique id and title)
 * 
 */ 
function App() {
  const [boards,setBoards]=useState(
    [
    {
      id:Math.floor((Math.random() * 100) + 1),
      title:"To Do",
      cards:[
     
      ],
    },
  ]);
  
 /**
 * Set the intial state empty for the Searchbox  
 * 
 */  
const[input,setInput]=useState('');

 /**
 *  Set the intial state empty for the card id and board id for Drag and Drop 
 * 
 */

const [target,setTarget]=useState({
     cid:"",
     bid:"",
  });

 /**
 *  function for the add card in the board 
 * 
 */
  const addCard = (title,bid) => {
     const card={
     id:Math.floor((Math.random() * 100) + 1),
     title,

    };
    const index = boards.findIndex((item) => item.id === bid);
    if (index < 0) return;

    const tempBoards = [...boards];
     tempBoards[index].cards.push(card);
         setBoards(tempBoards);
  };
 /**
 *  function for the remove card form the board
 * 
 */

  const removeCard=(cid,bid)=>{
    const bIndex=boards.findIndex((item)=>item.id===bid);
    if(bIndex<0)
    return;
    const cIndex=boards[bIndex].cards.findIndex((item)=>item.id===cid);
    if(cIndex<0)
    return;
   const tempBoards=[...boards]
   tempBoards[bIndex].cards.splice(cIndex,1)
   setBoards(tempBoards);

  };

   /**
 *  function for the Add Board in the kanban board
 * 
 */
  const addBoard=(title)=>{
    setBoards([...boards,{
      id:Math.floor((Math.random() * 100) + 1),
      title,
      cards:[],
    },
  ]);
  };

   /**
 *  Function for remove board in the kanban board
 * 
 */
  const removeBoard=bid=>{
    const tempBoards=boards.filter(item=>item.id!==bid)
    setBoards(tempBoards);
  }
  
    /**
 *  Function for the DragEnd (when drop any card to another card)
 * 
 */

const handleDragEnd=(cid, bid)=>{
  let s_bIndex,s_cIndex,t_bIndex,t_cIndex;  
  s_bIndex = boards.findIndex((item) => item.id === bid)
  s_cIndex = boards[s_bIndex]?.cards?.findIndex((item) => item.id === cid )

if (s_bIndex < 0 ||  s_cIndex < 0) return;
  //  console.log("source board id",bid, "source card id",cid);
    
   t_bIndex = boards.findIndex((item) => item.id === target.bid)
   t_cIndex = boards[t_bIndex]?.cards?.findIndex((item) => item.id === target.cid )

    if (t_bIndex < 0) return;
    //  console.log("target board id",target.bid);

    const tempboards=[...boards]
    const tempCard=tempboards[s_bIndex].cards[s_cIndex]
    tempboards[s_bIndex].cards.splice(s_cIndex,1)
    tempboards[t_bIndex].cards.splice(t_cIndex,0,tempCard);
    setBoards(tempboards);

  };

      /**
 *  Function for the DragEnter (when drag any card to from board)

 * 
 */
  const handleDragEnter=(cid,bid)=>{
    setTarget({
       cid,
     bid,
    });

  };
     /**
 *  Function for Edit Card in the board
 * 
 */
  const updateCard = (bid, cid, card) => {
    const index = boards.findIndex((item) => item.id === bid);
    if (index < 0) return;

    const tempBoards = [...boards];
    const cards = tempBoards[index].cards;

    const cardIndex = cards.findIndex((item) => item.id === cid);
    if (cardIndex < 0) return;

    tempBoards[index].cards[cardIndex] = card;

    setBoards(tempBoards);
  };
  return (
      <div className="app">
       {/************* Nevbar contains the navbar name and contains searchbox */}
<nav className="navbar">
  <h4 className="navbarBrand">Kanban Board</h4>
   <form>
     <div className="input-group">
       <input type="text" className="form-control" placeholder="Search" onChange={(e)=>setInput(e.target.value)} value={input}  />
     
          <div className="input-group-btn">
           <button className="btn btn-default" type="submit"> 
            <i className="glyphicon glyphicon-search"></i>
          </button> 
         </div> 
    </div>
</form>
</nav>
<div className="appOuter">
  <div className="appBoards">
    {
           /**
 *  Mapping the card with the board id and pass to board component
 * 
 */
      boards.map((item)=>(<Board 
        key={item.id} board={item}
      removeBoard={removeBoard}
      addCard={addCard}
      removeCard={removeCard}
      handleDragEnd={handleDragEnd}   
      handleDragEnter={handleDragEnter}
      updateCard={updateCard}
      input={input}
      />))
    }

{/********************** Editable component for the Add the New BOard in the project ************* */}
    <div className="appBoardsBoard">
    <Editable displayClass="appBoardsBoardAdd" text="Add Another list" placeholder="Add Another List"
    onSubmit={(value)=>addBoard(value)} />
    </div>
  </div>
</div>
</div>
  );
}
export default App;
