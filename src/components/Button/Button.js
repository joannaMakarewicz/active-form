import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab, faUser);

function Button({ label, bgColor, color, sentItem }) {

  return (
    <div className="button">
      <FontAwesomeIcon icon={["fab", "react"]} className="button__brand" size="2x" />
      <div>
        <FontAwesomeIcon icon="user" size="xs" />
        <input className="button__submit" type="submit" value={label}/>
      </div>
    </div>
  );
}

export default Button;
