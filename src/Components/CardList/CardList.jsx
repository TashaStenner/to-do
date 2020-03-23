import React, { useState, useEffect } from "react";
import styles from "./CardList.module.scss";
import Card from "../Card";
import { firestore } from "../../firebase";

const CardList = () => {
  const [toDoList, SetToDoList] = useState([]);

  useEffect(() => {
    fetchtoDoList();
  }, []);

  const fetchtoDoList = () => {
    firestore
      .collection("toDoList")
      .get()
      .then(docs => {
        console.log(docs);
        let alltoDos = [];
        docs.forEach(doc => {
          const id = doc.id;
          const addId = { ...doc.data(), id: id };
          alltoDos.push(addId);
        });
        SetToDoList(alltoDos);
        console.log(toDoList);
        console.log(alltoDos);
      });
  };

  const deleteFromDB = item => {
    console.log(item);
    console.log(item.id);
    firestore
      .collection("toDoList")
      .doc(item.id)
      .delete()
      .then(() => {
        fetchtoDoList();
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
    <section className={styles.toDo}>
      {toDoList.map(toDo => (
        <>
          <Card
            title={toDo.toDoTitle}
            author={toDo.toDoAuthor}
            creation={toDo.toDoCreationDate}
            completion={toDo.toDoCompletionDate}
            image={toDo.toDoImageRef}
            handleClick={() => deleteFromDB(toDo)}
          />
        </>
      ))}
      <h2 className={styles.complete}>Click to Complete</h2>
      </section>
    </>
  );
};

export default CardList;
