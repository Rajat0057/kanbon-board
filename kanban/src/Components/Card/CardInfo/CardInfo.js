import React from 'react'
import Modal from '../../Modal/Modal';
import {Type}from "react-feather";
import { useState,useEffect } from 'react';
import './CardInfo.css'
import Editable from '../../Editable/Editable';
function Cardinfo(props) 
{ const [values, setValues] = useState({
    ...props.card,
  });

/**
 * Useeffect hooks for pass the board id , value id and new title and set to function
 * 
 */

   useEffect(() => {
    if (props.updateCard) props.updateCard(props.boardId, values.id, values);
  }, [values]);
 
 /**
 *  function for the updated card title 
 * 
 */  
  const updateTitle = (value) => {
    setValues({ ...values, title: value });
  };
    return (
       
           <Modal onClose={()=>props.onClose()}>
                <div className="cardInfo">

   {/******************************* Div for the edit card Title **********************/}
                    <div className="cardInfoBox">
                        <div className="cardInfoBoxTitle">
                            <Type/>
                            Title
                         </div>
                         <div className="cardInfoBoxBody">
                         <Editable text={values.title} 
                         default={values.title}
                         placeholder="enter title"
                         buttonText="Set Title"
                         onSubmit={updateTitle}
                         />
                         </div>
                    </div>
    {/* *************************Div for the Description in board ***************************
                      <div className="cardInfoBox">
                        <div className="cardInfoBoxTitle">
                            <List/>
                            description
                         </div>
                         <div className="cardinfoBoxBody">
                         <Editable 
                         text={"your description here"} 
                          placeholder="enter Descripition"
                         buttonText="Set Descripition"/>
                         </div> 
                     </div>  */}
                  </div>
            </Modal>
       
    )
}

export default Cardinfo
