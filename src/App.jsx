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

const CalculateSquare = () => {
  const [numberInput, setNumberInput] = useState();
  const [squaredValue, setSquaredValue] = useState();
  const clickHandler = () => {
    const squareValue = numberInput * numberInput;
    setSquaredValue(squareValue);
  };
  return (
    <div>
      <label for="numberInput">Enter a number: </label>
      <input
        id="numberInput"
        onChange={(event) => setNumberInput(event.target.value)}
      />
      <button onClick={clickHandler}>Calculate Square</button>
      {squaredValue && <p>{squaredValue}</p>}
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
      <br />
      <br />
      <CalculateSquare />
    </main>
  );
}
