import React from "react";
import styles from "./Card.module.scss";
import Button from "../Button";

const Card = props => {
  const { title, author, creation, completion, image, handleClick } = props;

  return (
    <>
      <section className={styles.list}>
        <div className={styles.data}>
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
