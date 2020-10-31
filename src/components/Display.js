import React from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { Button } from './Button'
import './Display.css'
import {GlobalCtx} from "../App"

const Display = (props) => {
  const {gState, setgState} = React.useContext(GlobalCtx)
  const {token} = gState
  const { words } = props;
  const [state, setState] = React.useState({
    search: "",
  });

  const updateSearch = (event) => {
    setState({ ...state, search: event.target.value.substr(0, 20) });
  };

  const loaded = () => {
    if (words.length > 0){
    let filteredWords = words.filter((word) => {
      return word.word.toLowerCase().indexOf(state.search.toLowerCase()) !== -1;
    });
    return (
      <div className="container">
        <Link to="/profile/learningpath/create">
          <button className="btn" buttonSize="btn--large">+ Add a Word/Phrase</button>
        </Link>
        <br />
        <br />
        <form className="searchform">
          <input type="text" placeholder="Quick search library" value={state.search} onChange={updateSearch}></input>
        </form>
        <br />


        <div style={{ textAlign: "center" }}>
          {filteredWords.map((word) => (
            <>
              <Card className="Pocketbook">
                <Card.Body>
                  <div
                    onClick={() => {
                      props.selectWord(word);
                      props.history.push("/profile/learningpath/videos");
                    }}
                  >
                    <Card.Title> <h1><b>{word.word}</b></h1></Card.Title>
                    <Card.Text><h3>{word.age}</h3></Card.Text>
                    {/* <Card.Img variant="top" src={word.img} className="card-img" /> */}
                    <Card.Img variant="top" src={word.img} className="card-img" />

                  </div>

                  <button className="form-input-btn"
                    onClick={() => {
                      props.selectWord(word);
                      props.history.push("/profile/learningpath/edit");
                    }}
                  >
                    Edit
              </button>
                  <button className="form-input-btn"
                    onClick={() => {
                      props.deleteWord(word);
                    }}
                  >
                    Delete
              </button>
                </Card.Body>
              </Card>
            </>
          ))}
        </div>

      </div>
    );
                  } else {

                    return (
                        <Link to="/profile/learningpath/create">
                          <button className="btn" buttonSize="btn--large">+ Add a Word/Phrase</button>
                        </Link>
                        )

                  }
  };
  const loading = <h1>Loading...</h1>;

  return token !== null ? loaded() : loading;
};

export default Display;