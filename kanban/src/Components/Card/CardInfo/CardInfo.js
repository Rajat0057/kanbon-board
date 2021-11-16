import React from 'react'
import Modal from '../../Modal/Modal';
import {Type, List }from "react-feather";
import { useState,useEffect } from 'react';
import './CardInfo.css'
import Editable from '../../Editable/Editable';
function Cardinfo(props) {
const  {title,desc}=props.card;
 const [values, setValues] = useState({
    ...props.card,
  });


///////// Useeffect hooks for pass the board id , value id and new title and set to function
   useEffect(() => {
    if (props.updateCard) props.updateCard(props.boardId, values.id, values);
  }, [values]);
  
  //////////////////////////////////////////////// function for the updated card title 
  const updateTitle = (value) => {
    setValues({ ...values, title: value });
  };
    return (
       
           <Modal onClose={()=>props.onClose()}>
                <div className="cardinfo">

   {/******************************* Div for the edit card Title **********************/}
                    <div className="cardinfo_box">
                        <div className="cardinfo_box_title">
                            <Type/>
                            Title
                         </div>
                         <div className="cardinfo_box_body">
                         <Editable text={values.title} 
                         default={values.title}
                         placeholder="enyer tirle"
                         buttonText="Set Title"
                         onSubmit={updateTitle}
                         />
                         </div>
                    </div>
    {/* *************************Div for the Description in board ***************************
                      <div className="cardinfo_box">
                        <div className="cardinfo_box_title">
                            <List/>
                            description
                         </div>
                         <div className="cardinfo_box_body">
                         <Editable 
                         text={"your description here"} 
                          placeholder="enyer tirle"
                         buttonText="Set Descripition"/>
                         </div> 
                     </div>  */}
                  </div>
            </Modal>
       
    )
}

export default Cardinfo
