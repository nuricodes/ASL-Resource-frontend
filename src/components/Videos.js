const React = require("react");

const Videos = (props) => {
  //fetch call to backend goes here

  return <h1>{props.word.word}</h1>;
  //map function with video iframe goes here
};

export default Videos;
