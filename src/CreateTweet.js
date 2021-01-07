import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { v4 } from "uuid";

const CreateTweet = ({
  CreatedTweet,
  SetCreatedTweet,
  SetNewlyCreatedTweet,
  NewlyCreatedTweet,
}) => {
  const [Priority, setPriority] = useState("3");

  const TakeTweet = (e) => {
    e.preventDefault();
    SetNewlyCreatedTweet(e.target.value);
  };

  const PostTweet = (e) => {
    e.preventDefault();
    const newCreatedTweetWithPriority = [
      {
        id: v4(),
        name: NewlyCreatedTweet,
        priority: Priority,
        status: "inprogress",
      },
    ];

    SetCreatedTweet(CreatedTweet.concat(newCreatedTweetWithPriority));
    // FIXME:
    localStorage.setItem(
      "myValueInLocalStorage",
      JSON.stringify(CreatedTweet.concat(newCreatedTweetWithPriority))
    );
    console.log(JSON.parse(localStorage.getItem("myValueInLocalStorage")));
    SetNewlyCreatedTweet([]);
  };
  const ChangePriority = (e) => {
    setPriority(e.target.value);
  };

  return (
    <div>
      <div className="form-group" id="group">
        <textarea
          value={NewlyCreatedTweet}
          className="form-control mt-5"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="What's next!"
          onChange={TakeTweet}
        ></textarea>
        <select
          className="form-select form-select-sm ml-2 priority"
          aria-label=".form-select-sm example"
          onChange={ChangePriority}
        >
          <option defaultValue="3">Priority</option>
          <option value="1">Most</option>
          <option value="2">Medium</option>
          <option value="3">Low</option>
        </select>
      </div>
      <div className="buttons">
        <button
          type="button"
          className="btn btn-primary ml-2"
          onClick={PostTweet}
        >
          CreateTodo
        </button>
      </div>
    </div>
  );
};
export default CreateTweet;
