import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-solid-svg-icons';

library.add(faUser);

function Button({ label, bgColor, color }) {
    const styles = {
      background: bgColor,
      border: 0,
      borderRadius:6,
      color: color,
      fontSize: 24,
      margin: 50,
      marginLeft: 5,
      padding:16
    }
    return (
      <div>
         <FontAwesomeIcon icon="user" size="lg" />
        <button style={styles}>{label}</button>
      </div>
    );
  }


export default Button;
