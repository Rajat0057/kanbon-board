import React, { useState } from 'react'
import './App.css';
import Board from "./Components/Board/Board"
import Editable from './Components/Editable/Editable';

function App() {
  const [boards,setBoards]=useState([
    {
      id:Date.now()+Math.random()*3,
      title:"To Do",
      cards:[
        // {
        //   id:Date.now()+Math.random(),
        //   // title:"Card 1",
        // },
        // {
        //   id:Date.now()+Math.random(),
        //   // title:"Card 2",
        // },
      ],
    },
  ]);
  const addCard=(title,bid)=>{
    // const card={
    //   id:Date.now()+Math.random(),
    //   title,
    // };
    const index=boards.findIndex((item)=>item.id===bid);
    if(index<0)
    return;

    const tempBoards=[...boards];
    tempBoards[index].cards.push({id:Date.now()+Math.random(),
      title,});
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
    },
  ]);
  };

  const removeBoard=bid=>{
    const tempBoards=boards.filter(item=>item.id!==bid)
    setBoards(tempBoards);
  }

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
