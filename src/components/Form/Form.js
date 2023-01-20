import React from "react";
import Input from "../Input";
import Button from "../Button";
import Textarea from "../Textarea";

const alizarin  = '#e74c3c';
const pomegranate = '#c0392b';
const clouds = '#ecf0f1';
const silver = '#bdc3c7';

function Form () {
    return (
        <form>
        <Input />
        <Textarea />
        <Button label="Zapisz się" bgColor={alizarin} color={clouds} />
      </form>
    )
  }

export default Form;