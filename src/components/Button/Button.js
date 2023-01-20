import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab, faUser);

function Button({ label, bgColor, color }) {
  
  const styles = {
    background: bgColor,
    border: 0,
    borderRadius: 6,
    color: color,
    fontSize: 18,
    margin: 16,
    padding: 16,
  };
  const clickEvent = () => console.log('Udało się');
  return (
    <div className="button">
      <FontAwesomeIcon icon={["fab", "react"]} className="button__brand" size="2x" />
      <div>
        <FontAwesomeIcon icon="user" size="xs" />
        <input type="submit" style={styles} onClick={clickEvent} value={label}/>
      </div>
    </div>
  );
}

export default Button;
