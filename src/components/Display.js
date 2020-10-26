import React from "react";

const Display = (props) => {
  const {words} = props

  const loaded = () => {
  return (
    <div style={{textAlign: "center"}}>
      {words.map((word)=>(
        <article>
          <h1>{word.word}</h1>
          <img src={word.img}/>
          <h3>{word.age}</h3>
          <button onClick={()=>{
            props.selectWord(word);
            props.history.push("/edit")
          }}>Edit</button>
          <button onClick={()=>{
            props.deleteWord(word);
          }}>Delete</button>
        </article>
      ))}
  </div>
  )
}
const loading = <h1>Loading...</h1>

return words.length > 0 ? loaded() : loading

};

export default Display;