import React from "react";

function Confirmation() {
  return (
    <div className="card">
      <h5 className="card-header">Twoje zgłoszenie zostało wysłane!</h5>
      <div className="card-body">
        <h5 className="card-title">Przekazane dane:</h5>
        <div className="card-text">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Imię i nazwisko:</li>
          <li className="list-group-item">Twoje oczekiwania wobec szkolenia:</li>
        </ul>
        </div>

        <a href="/" className="btn btn-primary">
          Edytuj dane
        </a>
      </div>
    </div>
  );
}

export default Confirmation;
