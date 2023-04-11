import React from "react";



function Input() {

  return (
    <div className="input">
      <label className="input__name">
        Imię i nazwisko:{" "}
        <input className="input__area" type="text"  placeholder="Wpisz imię i nazwisko"></input>
      </label>
    </div>
  );
}

export default Input;
