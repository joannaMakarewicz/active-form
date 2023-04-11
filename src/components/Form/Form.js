import React, { useState, useRef } from "react";
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
  const nameInput = useRef();

  const handleFocusClick = () => {
    nameInput.current.focus();
    nameInput.current.value = "Kowalski";
    nameInput.current.style.border = "#f00 1px solid";
  };
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
          ref={nameInput}
          name="name"
          placeholder="Surname"
          onChange={handleNameChange}
        />
      </div>
      <Textarea />
      <Button />
      <SecondButton onClick={handleFocusClick} />
    </form>
  );
}

export default Form;
