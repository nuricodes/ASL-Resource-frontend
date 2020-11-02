import React from "react";
import {GlobalCtx} from "../App"
import './pages/Join/Form.css'

const Form = (props) => {
  //STATE FOR THE FORM
  const [formData, setFormData] = React.useState(props.word);
  const {gState, setgState} = React.useContext(GlobalCtx)

  //FUNCTIONS
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent Form from Refreshing
    formData.user = gState.user
    console.log(formData)
    props.handleSubmit(formData); // Submit to Parents desired function
    props.history.push("/profile/learningpath"); //Push back to display page
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="form-container">
                <div className="form-content-right">
    <form className="form" onSubmit={handleSubmit}>
                <h1>{props.label}</h1>
      <div className="form-inputs">
        <label className="form-label">Word</label>
      <input
      className="form-input"
        type="text"
        name="word"
        value={formData.word}
        onChange={handleChange}
      />
      </div>
      <div className="form-inputs">
      <label className="form-label">Image URL</label>
      <input
      className='form-input'
        type="text"
        name="img"
        value={formData.img}
        onChange={handleChange}
      />
      </div>
      <input
        type="hidden"
        name="user"
        value={formData.user}
      />
      <input className="form-input-btn" type="submit" value={props.label} />
    </form>
    </div>
    </div>
  );
};

export default Form;
