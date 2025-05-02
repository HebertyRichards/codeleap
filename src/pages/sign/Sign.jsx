import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginScreen() {
  const [username, setUsername] = useState("");
  const isButtonDisabled = username.trim() === "";
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate("/home", { state: { username } });
  };

  return (
    <div className="container">
      <div className="card">
        <h3>Welcome to CodeLeap network!</h3>
        <p>Please enter your username</p>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input"
        />
        <button
          disabled={isButtonDisabled}
          onClick={handleEnter}
          className={`button ${isButtonDisabled ? "button-disabled" : ""}`}
        >
          ENTER
        </button>
      </div>
    </div>
  );
}

export default LoginScreen;
