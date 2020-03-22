import React, { useState } from "react";
import styles from "./Card.module.scss";
import Button from "../Button";

const Card = props => {
  const { title, author, creation, completion, image, handleClick } = props;

  const [toggleDone, SetToggleDone] = useState(false);

  const done = toggleDone ? styles.complete : styles.incomplete;

  const complete = toggleDone => {
    SetToggleDone(!toggleDone);
  };

  return (
    <>
      <section className={styles.list}>
        <div className={`${styles.data} ${done}`} onClick={() => complete(toggleDone)}>
          <h2>{title}</h2>
          <h3>{author}</h3>
          <p>{`You made this on: ${creation}`}</p>
          <p>{`Completetion Date: ${completion}`}</p>
          <img src={image} alt={image} />
          <Button handleClick={handleClick} text={"Delete"} isPrimary={false} />
        </div>
      </section>
    </>
  );
};

export default Card;
