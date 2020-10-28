import React from "react";
import "../App.css";
import { Route, Link, Switch } from "react-router-dom";
import Display from "./Display";
import Form from "./Form";
import Videos from "./Videos";
import './ASLPocketbook.css'

function ASLPocketbook() {

  //Variable to hold url
  const url = "http://localhost:5000";
  //State to Hold Words
  const [words, setWords] = React.useState([]);

  //Empty Word
  const emptyWord = {
    name: "",
    age: 0,
    img: "",
  };
  const [selectedWord, setSelectedWord] = React.useState(emptyWord);

  //Function to get words via API
  const getWords = () => {
    fetch(url + "/word")
      .then(response => response.json())
      .then(data => {
        setWords(data)
      })
  }

  //useEffect to do initial call of getWords
  React.useEffect(() => {
    getWords()
  }, [])

  //handle create to create words
  const handleCreate = (newWord) => {
    fetch(url + "/word", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newWord),
    }).then((response) => {
      getWords();
    });
  };

  //handleUpdate function for updating words
  const handleUpdate = (word) => {
    fetch(url + "/word/" + word._id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(word),
    }).then(() => {
      // don't need the response from the post but will be using the .then to update the list of words
      getWords();
    });
  };

  const selectWord = (word) => {
    setSelectedWord(word);
  };

  const deleteWord = (word) => {
    fetch(url + "/word/" + word._id, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      // don't need the response from the post but will be using the .then to update the list of words
      getWords();
    });
  };

  return (
    <div className="ASLPocketbook">
      <h1>ASL Pocket Reference</h1>
      <hr />

      <main>
        <Switch>
          <Route
            exact
            path="/"
            render={(rp) => (
              <Display
                selectWord={selectWord}
                deleteWord={deleteWord}
                {...rp}
                words={words}
              />
            )}
          />
          <Route
            exact
            path="/create"
            render={(rp) => (
              <Form
                {...rp}
                label="create"
                word={{}}
                handleSubmit={handleCreate}
              />
            )}
          />
          <Route
            exact
            path="/edit"
            render={(rp) => (
              <Form
                {...rp}
                label="update"
                word={selectedWord}
                handleSubmit={handleUpdate}
              />
            )}
          />
          <Route
            exact
            path="/videos"
            render={(rp) => <Videos {...rp} word={selectedWord} />}
          />
        </Switch>
      </main>
    </div>
  );
}

export default ASLPocketbook;
