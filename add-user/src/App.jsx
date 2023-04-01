import { useState } from "react";
import Form from "./components/Form/form";
import List from "./components/list/List";
import RemoveButton from "./components/remove-button/removebutton";

import "./index.css";

function App() {
  const [list, setList] = useState([]);

  const addNewUser = (name, age) => {
    setList((prevList) => {
      return [...prevList, { name, age }];
    });
  };

  const removeUsers = ()=>{
    setList([])
  }

  return (
    <>
      <Form addNewUser={addNewUser}   />
    

    {!!list.length && <List list={list} />}
    {!!list.length && <RemoveButton removeUsers={removeUsers} />}
    </>
  );
}

export default App;
