import React, { useEffect,useState,useRef } from 'react'
import './App.css';
import Board from "./Components/Board/Board"
import Editable from './Components/Editable/Editable';
import {Search} from 'react-feather';

function App(props) {
  const [boards,setBoards]=useState(
    [
    {
      id:Date.now()+Math.random()*3,
      title:"To Do",
      cards:[
     
      ],
    },
  ]);

  const[searchTerm,setsearchTerm]=useState("");
  const [target,setTarget]=useState({
    cid:"",
    bid:"",
  });

//function for the add card in the board

  const addCard = (title,bid) => {
     const card={
     id:Date.now()+Math.random(),
     title,
     labels:[],
     tasks:[],
     desc:"",

    };
    const index = boards.findIndex((item) => item.id === bid);
    if (index < 0) return;

    const tempBoards = [...boards];
     tempBoards[index].cards.push(card);
         setBoards(tempBoards);
  };

// function for the remove card form the board

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

  // function for the Add Board in the kanban board

  const addBoard=(title)=>{
    setBoards([...boards,{
      id:Date.now()+Math.random(),
      title,
      cards:[],
    },
  ]);
  };

   // function for remove board in the kanban board
  const removeBoard=bid=>{
    const tempBoards=boards.filter(item=>item.id!==bid)
    setBoards(tempBoards);
  }
  
  // function for the Drop the card form board

  const handleDragEnd=(cid,bid)=>{
    let s_bIndex,s_cIndex,t_bIndex,t_cIndex;
      s_bIndex = boards.findIndex((item) => item.id === bid)
    if (s_bIndex < 0) return;

       s_cIndex = boards[s_bIndex]?.cards?.findIndex((item) => item.id === cid )
    if (s_cIndex < 0) return;

     t_bIndex = boards.findIndex((item) => item.id === target.bid)
    if (t_bIndex < 0) return;

       t_cIndex = boards[t_bIndex]?.cards?.findIndex((item) => item.id === target.cid )
         if (t_cIndex < 0) return;

    const tempboards=[...boards]
    const tempCard=tempboards[s_bIndex].cards[s_cIndex]

    tempboards[s_bIndex].cards.splice(s_cIndex,1)
    tempboards[t_bIndex].cards.splice(t_cIndex,0,tempCard);
    setBoards(tempboards);

  };

  // function for the Drag the card form board
   const handleDragEnter=(cid,bid)=>{
    setTarget({
    cid,
    bid,
    });

  };

 // Function for Edit Card in the board

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


const searchHandler=()=>{

};

const getSearchTerm=()=>{
console.log(inputE1.current.value);
};
const inputE1=useRef("");

  return (
      <div className="app">
<nav class="navbar">
  <span class="navbar-brand">Kanban Board</span>
   <form>
     <div className="input-group">
       <input type="text" className="form-control" placeholder="Search" value={props.term} ref= {inputE1} onchange={getSearchTerm()} />
          <div className="input-group-btn">
           <button className="btn btn-default" type="submit"> 
            <i className="glyphicon glyphicon-search"></i>
          </button> 
         </div> 
    </div>
</form>
</nav>
<div className="app_outer">
  <div className="app_boards">
    {
      // Mapping the card with the board id
      boards.map((item)=>(<Board key={item.id} board={item}
      removeBoard={removeBoard}
      addCard={addCard}
      removeCard={removeCard}
      handleDragEnd={handleDragEnd}
      handleDragEnter={handleDragEnter}
      updateCard={updateCard}
      term={searchTerm}
      searchkeyword={searchHandler}
      />))
    }

    <div className="app_boards_board">
    <Editable displayClass="app_boards_board_add" text="Add Another list" placeholder="Add Another List"
    onSubmit={(value)=>addBoard(value)} />
    </div>
  </div>
</div>
</div>

  );
}

export default App;
