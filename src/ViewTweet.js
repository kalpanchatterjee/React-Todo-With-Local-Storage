import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { AiOutlineDelete, AiOutlineStar } from "react-icons/ai";

import { BsCheckAll } from "react-icons/bs";
const ViewTweet = ({ tweets, SetCreatedTweet }) => {
  const DeleteTodo = (id) => {
    SetCreatedTweet(tweets.filter((tweet) => tweet.id !== id));
    localStorage.setItem(
      "myValueInLocalStorage",
      JSON.stringify(tweets.filter((tweet) => tweet.id !== id))
    );
  };
  const CompleteTodo = (id) => {
    SetCreatedTweet(
      tweets.map((tweet, index) => {
        if (tweet.id === id) {
          tweet.status = "complete";
        }
        return tweet;
      })
    );
    console.log(tweets);
  };

  return (
    <div className="TodosDiv container">
      {tweets.map((tweet, index) => {
        let color = "";
        let display = tweet.status === "complete" ? "block" : "none";
        color = tweet.priority === "1" && color === "" ? "#EB4D4B" : color;
        color = tweet.priority === "2" && color === "" ? "#AF9D5A" : color;
        color = tweet.priority === "3" && color === "" ? "#6AC47E" : color;
        color = tweet.status === "complete" ? "#35BDD0" : color;
        return (
          <div
            key={tweet.id}
            className="card col-6"
            style={{
              maxWidth: "18rem",
              padding: "10px",
              display: "inline-block",
              margin: "5px",
              background: `${color}`,
            }}
          >
            <span style={{ float: "right" }}>
              <AiOutlineStar
                title="Completed"
                className="mr-2"
                style={{ display: `${display}` }}
              />
            </span>
            <h5 className="card-title" style={{ color: "black" }}>
              Todo : {index + 1}
            </h5>
            <p className="card-text">{tweet.name}</p>
            <div className="container AiOutlineDelete">
              <AiOutlineDelete
                onClick={() => DeleteTodo(tweet.id)}
                className="mr-2"
              ></AiOutlineDelete>
              <BsCheckAll
                className="mr-2"
                onClick={() => CompleteTodo(tweet.id)}
              ></BsCheckAll>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ViewTweet;
