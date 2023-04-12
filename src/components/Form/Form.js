import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Input from "../Input";
import Button from "../Button";
import Textarea from "../Textarea";
import SecondButton from "../SecondButton";

function useInput(initialValue = "") {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return [value, handleChange];
}

function Form() {
  const navigate = useNavigate();
  const [name, handleNameChange] = useInput("");


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('udało się');
    navigate('/done')
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Input
          type="text"
          name="name"
          placeholder="Surname"
          onChange={handleNameChange}
        />
      </div>
      <Textarea />
      <Button />
      <SecondButton />
    </form>
  );
}

export default Form;
