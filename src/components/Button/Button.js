import React from "react";

function Button({ label, bgColor, color }) {
    const styles = {
      background: bgColor,
      border: 0,
      borderRadius:6,
      color: color,
      fontSize: 24,
      margin: 50,
      padding:16
    }
    return (
      <div>
        <button style={styles}>{label}</button>
      </div>
    );
  }


export default Button;
