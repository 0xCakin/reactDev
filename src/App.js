import React, { useState, useEffect } from "react";
import './App.css';


function App() {
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("tired");

  useEffect(() => {
    console.log(`It's ${emotion} around here!`);
  }, [emotion]);

  useEffect(() => {
    console.log(`it's ${secondary} around here!`)
  })
  return (
    <>
    <h1>Current emotion is {emotion} and {secondary}.</h1>
    <button onClick={() => setEmotion("happy")}>Happy</button>
    <button onClick={() => setSecondary("crabby")}>crabby</button>
    <button onClick={() => setEmotion("frustrated")}>Frustrate</button>
    <button onClick={() => setSecondary("enthusiastic")}>Enthusiastic</button>
    </>
  );
}

export default App;
