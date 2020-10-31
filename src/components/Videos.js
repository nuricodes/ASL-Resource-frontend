const React = require("react");
import {GlobalCtx} from "../App"

const Videos = (props) => {
  const [videos, setVideos] = React.useState([]);
  const {gState, setgState} = React.useContext(GlobalCtx)
  const {token} = gState
  //fetch call to backend goes here
  const getVideos = () => {
    fetch("http://localhost:5000/word/show/" + props.word.word, {
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
      <h1>
        These videos might be helpful to learn the word "{props.word.word}":
      </h1>
      <div>
        {videos.map((video) => (
          <iframe
            width="420"
            height="315"
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
          ></iframe>
        ))}
      </div>
    </>
  );
};

export default Videos;
