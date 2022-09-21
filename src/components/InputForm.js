import { useState } from 'react';
import RenderForm from './RenderForm';

function InputForm(props) { 
  /**
   * Function to read user input from input form and passes user input to RenderForm component
   * @return {string} userInput is passed to RenderForm as a prop 
   */

  const [userInput, setUserInput] = useState("");
  // const [showSchema, setShowSchema] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    props.handleData(userInput)
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id= "input_box"
        value={userInput}
        onChange={(event) => setUserInput(event.target.value)}
      />

      {/* <button type="submit" onClick={handleSubmit}> Submit </button>       */}
      {/* Shows JSON schema if state is true */}
    </form>
  );
};

export default InputForm;
