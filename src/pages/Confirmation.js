import React from "react";

function Confirmation() {
  return (
    <div class="card">
      <h5 class="card-header">Twoje zgłoszenie zostało wysłane!</h5>
      <div class="card-body">
        <h5 class="card-title">Przekazane dane:</h5>
        <div className="card-text">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Imię i nazwisko:</li>
          <li class="list-group-item">Twoje oczekiwania wobec szkolenia:</li>
        </ul>
        </div>

        <a href="#" class="btn btn-primary">
          Edytuj dane
        </a>
      </div>
    </div>
  );
}

export default Confirmation;
