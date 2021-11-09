import React, { useEffect,useState } from 'react'
import './App.css';
import Board from "./Components/Board/Board"
import Editable from './Components/Editable/Editable';

function App() {
  const [boards,setBoards]=useState(
    [
    {
      id:Date.now()+Math.random()*3,
      title:"",
      cards:[
     
      ],
    },
  ]);

  const [target,setTarget]=useState({
    cid:"",
    bid:"",
  });
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

  const addBoard=(title)=>{
    setBoards([...boards,{
      id:Date.now()+Math.random(),
      title,
      cards:[],
    },
  ]);
  };

  const removeBoard=bid=>{
    const tempBoards=boards.filter(item=>item.id!==bid)
    setBoards(tempBoards);
  }
  
 
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
   const handleDragEnter=(cid,bid)=>{
    setTarget({
    cid,
    bid,
    });

  };
  return (
    <div className="app">
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"  >Kanban Board</a>
      <form>
  <div className="input-group">
    <input type="text" className="form-control" placeholder="Search" />
    <div className="input-group-btn">
      <button className="btn btn-default" type="submit">
        <i className="glyphicon glyphicon-search"></i>
      </button>
    </div>
  </div>
</form>
  </div>
</nav>
<div className="app_outer">
  <div className="app_boards">
    {
      boards.map((item)=>(<Board key={item.id} board={item}
      removeBoard={removeBoard}
      addCard={addCard}
      removeCard={removeCard}
      handleDragEnd={handleDragEnd}
      handleDragEnter={handleDragEnter}
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
