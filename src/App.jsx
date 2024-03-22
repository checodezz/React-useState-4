import { useState } from "react";
import "./App.css";

//greetuser
const GreetUser = () => {
  const [userName, setUserName] = useState("");
  const inputHandler = (event) => {
    setUserName(event.target.value);
  };
  return (
    <div>
      <label for="username">Enter your Name:</label>
      <input id="username" onChange={inputHandler} />
      {userName && <p>Hello, {userName}!</p>}
    </div>
  );
};

//email validator
const ValidateEmail = () => {
  const [email, setEmail] = useState("");

  const handleEmailInput = (event) => {
    setEmail(event.target.value);
  };

  const clickHandler = () => {
    const atIndex = email.indexOf("@");
    const dotIndex = email.indexOf(".");
    if (atIndex > 0 && dotIndex > atIndex) {
      alert("Valid Email Address");
    } else {
      alert("Invalid Email Adderss");
    }
  };

  return (
    <div>
      <label for="email">Enter your Email: </label>
      <input id="email" onChange={handleEmailInput} />
      <button onClick={clickHandler}>Validate Email</button>
    </div>
  );
};

export default function App() {
  return (
    <main>
      <GreetUser />
      <br />
      <br />
      <ValidateEmail />
    </main>
  );
}
