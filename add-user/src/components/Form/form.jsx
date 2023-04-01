import { useState } from "react";
import "./form.css";
import AddButton from "../add-button/addbutton";


export const Form = ({ addNewUser  }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim().length === 0 || age.trim().length === 0) {
      alert("Enter Valid Name or Age");
      return;
    }

    if (+age < 1) {
      alert("Age can not be less than 1");
      return;
    }

    addNewUser(name, age);

    setAge("");
    setName("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">User Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="age">Your Age</label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      <AddButton/>
       
      </form>
  
    </div>
  );
};

export default Form;
