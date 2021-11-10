import React from 'react'
import Modal from '../../Modal/Modal';
import {Type, List }from "react-feather";
import { useState,useEffect } from 'react';
import './CardInfo.css'
import Editable from '../../Editable/Editable';
function Cardinfo(props) {
    // console.log(props);
const  {title,desc}=props.card;


 const [values, setValues] = useState({
    ...props.card,
  });



   useEffect(() => {
    if (props.updateCard) props.updateCard(props.boardId, values.id, values);
  }, [values]);
  
  const updateTitle = (value) => {
    setValues({ ...values, title: value });
  };
    return (
        
           <Modal onClose={()=>props.onClose()}>
                <div className="cardinfo">
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
                    </div>
                  </div>
            </Modal>
       
    )
}

export default Cardinfo
