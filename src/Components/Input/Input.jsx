import styles from "./Input.module.scss";
import React, { useState, useEffect } from "react";
import { firestore } from "../../firebase";
import Button from "../Button";

const Input = (props) => {
  const {update} = props;
  const [toDoTitle, setToDoTitle] = useState("");
  const [toDoAuthor, settoDoAuthor] = useState("");
  const [toDoCreationDate, settoDoCreationDate] = useState("");
  const [toDoCompletionDate, settoDoCompletionDate] = useState("");
  const [toDoImageRef, settoDoImageRef] = useState("");
  // const [refresh, setRefresh] = useState("");

  // useEffect(() => {
  //   fetchtoDoList();
  // }, []);

  // const fetchtoDoList = () => {
  //   firestore
  //     .collection("toDoList")
  //     .doc()
  //     .get()
  //     .then(doc => {
  //       const todo = doc.data();
     
  //     });
  // };

  const addNewDoc = () => {
    const newDoc = {
      toDoTitle,
      toDoAuthor,
      toDoCreationDate,
      toDoCompletionDate,
      toDoImageRef
    };

    firestore
      .collection("toDoList")
      .add(newDoc)
      .then(() => {
        
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      <section className={styles.addNew}>
        <input
          type="text"
          placeholder="What do you need to do?"
          onInput={event => setToDoTitle(event.target.value)}
        />
        <input
          type="text"
          placeholder="Made by..."
          onInput={event => settoDoAuthor(event.target.value)}
        />

        <input
          type="text"
          placeholder="Whats today's date?"
          onInput={event => settoDoCreationDate(event.target.value)}
        />

        <input
          type="text"
          placeholder="When do you want this finished by?"
          onInput={event => settoDoCompletionDate(event.target.value)}
        />
        <input
          type="text"
          placeholder="Go on, give it a pic (URL only though please)"
          onInput={event => settoDoImageRef(event.target.value)}
        />
        <Button handleClick={addNewDoc} text={"Add"} isPrimary={true}/>
      </section>
    </>
  );
};

export default Input;
