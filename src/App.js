import React, { useEffect, useState } from "react";
import "./App.css";
import CreateTweet from "./CreateTweet";
import ViewTweet from "./ViewTweet";

function App() {
  const [CreatedTweet, SetCreatedTweet] = useState([]);
  const [NewlyCreatedTweet, SetNewlyCreatedTweet] = useState("");
  useEffect(() => {
    SetCreatedTweet(
      JSON.parse(localStorage.getItem("myValueInLocalStorage")) || []
    );
    // FIXME:
    //localStorage.removeItem("myValueInLocalStorage");
  }, []);

  return (
    <div className="App">
      <CreateTweet
        CreatedTweet={CreatedTweet}
        SetCreatedTweet={SetCreatedTweet}
        NewlyCreatedTweet={NewlyCreatedTweet}
        SetNewlyCreatedTweet={SetNewlyCreatedTweet}
      />
      <ViewTweet
        SetCreatedTweet={SetCreatedTweet}
        tweets={CreatedTweet}
      ></ViewTweet>
    </div>
  );
}

export default App;
