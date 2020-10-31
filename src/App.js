import React from "react";
import Navbar from "./components/Navbar";
import NavbarLogin from "./components/NavbarLogin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Signup from "./components/pages/Join/Signup";
import Discover from "./components/pages/Discover";
import Login from "./components/pages/Join/Login"

import LearningPaths from "./components/pages/LearningPaths/LearningPaths";

import Display from "./components/Display";
import Form from "./components/Form";
import Videos from "./components/Videos";

export const GlobalCtx = React.createContext(null)


function App() {
  //Variable to hold url
  const url = "http://localhost:5000";

  const [gState, setgState] = React.useState({url: "http://localhost:5000", token: null})
  
  //SEEING IF ALREADY LOGGED IN
  React.useEffect(()=>{
    const token = JSON.parse(window.localStorage.getItem("token"))
    console.log(token)
    if (token){
      setgState({...gState, token: token.token})
    }
  }, [])
  
  
  //State to Hold Words
  const [words, setWords] = React.useState([]);

  //Empty Word
  const emptyWord = {
    name: "",
    user: "",
    img: "",
  };
  const [selectedWord, setSelectedWord] = React.useState(emptyWord);

  //Function to get words via API
  const getWords = () => {
    fetch(url + "/word", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `bearer ${gState.token}`
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setWords(data);
      });
  };

  //useEffect to do initial call of getWords
  React.useEffect(() => {
    getWords();
  }, [gState.token]);

  //handle create to create words
  const handleCreate = (newWord) => {
    fetch(url + "/word", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "authorization": `bearer ${gState.token}`
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
        "authorization": `bearer ${gState.token}`
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
        "authorization": `bearer ${gState.token}`
      },
    }).then(() => {
      // don't need the response from the post but will be using the .then to update the list of words
      getWords();
    });
  };

  const loginCheck = () => {
    if (gState.token){
      return <NavbarLogin />
    } else {
      return <Navbar />
    }
  }


  return (
    <GlobalCtx.Provider value={{ gState, setgState }}>
    <>
      {loginCheck()}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/login" exact component={Login} />

        <Route
          exact
          path="/profile/learningpath"
          render={(rp) => ( gState.token ?
            <Display
              selectWord={selectWord}
              deleteWord={deleteWord}
              {...rp}
              words={words}
            /> : <h1>Not Logged In</h1>
          )}
        />
        <Route
          exact
          path="/profile/learningpath/create"
          render={(rp) => (
            <Form
              {...rp}
              label="Add a Word"
              word={{}}
              handleSubmit={handleCreate}
            />
          )}
        />
        <Route
          exact
          path="/profile/learningpath/edit"
          render={(rp) => (
            <Form
              {...rp}
              label="Update a Word"
              word={selectedWord}
              handleSubmit={handleUpdate}
            />
          )}
        />
        <Route
          exact
          path="/profile/learningpath/videos"
          render={(rp) => <Videos {...rp} word={selectedWord} />}
        />
      </Switch>
    </>
    </GlobalCtx.Provider>
  );
}

export default App;