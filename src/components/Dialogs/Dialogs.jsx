import React from "react";
import dialogs from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
const Dialogs = (props) => {
  let dialogsElements = props.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
  let messagesElements = props.messagesData.map(messags => <Message message={messags.message} />)
  let newMessageElement = React.createRef();
  let addMessage = () => {
    let message = newMessageElement.current.value 
    alert(messagesElements)
  }
  return (
    <div className={dialogs.dialogs}>
      <div className={dialogs.dialogsItems}>{dialogsElements}</div>
      <div className={dialogs.message}>
      <textarea ref={newMessageElement} placeholder="Введите текст" className={dialogs.text}></textarea>
      <button onClick={addMessage} className={dialogs.button}>Send</button>
      </div>
    </div>
  );
};

export default Dialogs;
