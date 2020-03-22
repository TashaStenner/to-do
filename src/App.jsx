import React, { useState } from "react";
import styles from "./App.module.scss";
import Input from "./Components/Input/Input";
import CardList from "./Components/CardList";
import Button from "./Components/Button";

function App() {
  const [toggleInput, SetToggleInput] = useState(true);

  const hidden = toggleInput ? styles.hide : styles.unHide;

  const unHideItems = toggleInput => {
    SetToggleInput(!toggleInput);
  };

  return (
    <>
      <div className={`${hidden}`}>
        <Input />
      </div>
      <CardList />
      <div>
        <Button
          handleClick={() => unHideItems(toggleInput)}
          text={"Add New To Do"}
          isPrimary={true}
        />
      </div>
    </>
  );
}

export default App;
