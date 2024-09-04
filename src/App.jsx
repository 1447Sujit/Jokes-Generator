import "./App.css";
import Jokes from "./Components/Jokes";
import { useState, useEffect } from "react";

function App() {

  const [jokes, setJokes] = useState("");

  let url = "https://official-joke-api.appspot.com/random_joke";

      let onClickHandler = async () => {
        let res = await fetch(url);
        let output = await res.json();
        // console.log(output);
        setJokes(output.setup + " 😂 " + output.punchline);
      };

        useEffect(() => {
          onClickHandler();
        }, []);

  return (
    <div className="appContainer">
      <h1>Jokes Generator</h1>
      <Jokes jokes={jokes} onClickHandler={onClickHandler}></Jokes>
    </div>
  );
}

export default App;
