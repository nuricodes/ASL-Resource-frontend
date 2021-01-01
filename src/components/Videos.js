const React = require("react");
import { GlobalCtx } from "../App";
import Card from 'react-bootstrap/Card';
import "./Videos.css";

const Videos = (props) => {
  const [videos, setVideos] = React.useState([]);
  const { gState, setgState } = React.useContext(GlobalCtx)
  const { token } = gState
  //fetch call to backend goes here
  const getVideos = () => {
    fetch("https://signsourcebackend.herokuapp.com/word/show/" + props.word.word, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `bearer ${token}`
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setVideos(data.items);
      });
  };
  React.useEffect(() => {
    getVideos();
  }, []);
  return (
    <>
      <h1 className="videos-title">
        These videos might be helpful to learn the word "{props.word.word}":
      </h1>
      {videos.map((video) => (
        <iframe
          width="420"
          height="315"
          className="youtube"
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
        ></iframe>
      ))}
    </>
  );
};

export default Videos;
