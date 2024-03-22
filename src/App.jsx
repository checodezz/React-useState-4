import { useState } from "react";
import "./App.css";

const GreetUser = () => {
  const [userName, setUserName] = useState();
  const inputHandler = (event) => {
    setUserName(event.target.value);
  };
  return (
    <div>
      <label for="username">Enter your Name:</label>
      <input id="username" onChange={inputHandler} />
      <p>{userName}</p>
    </div>
  );
};

export default function App() {
  return (
    <main>
      <GreetUser />
    </main>
  );
}
