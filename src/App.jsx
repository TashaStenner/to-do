import React, { useState } from "react";
import styles from "./App.module.scss";
import Input from "./Components/Input/Input";
import CardList from "./Components/CardList";
import Button from "./Components/Button";

function App() {
  const [toggleInput, setToggleInput] = useState(true);
  const [updateToDo, setUpdateToDo] = useState(false);
  const hidden = toggleInput ? styles.hide : styles.unHide;

  const unHideItems = toggleInput => {
    setToggleInput(!toggleInput);
  };

  return (
    <>
      <h1>My To Do's:</h1>
      <div className={styles.add}>
        <Button
          handleClick={() => unHideItems(toggleInput)}
          text={"Add New To Do"}
          isPrimary={true}
        />
      </div>
      <div className={`${hidden}`}>
        <Input />
      </div>
      <section className={styles.dashboard}>
        <CardList />
      </section>
    </>
  );
}

export default App;
