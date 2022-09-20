import { useState } from 'react';
import RenderForm from './RenderForm';

function InputForm() {
  /**
   * Function to read user input from input form and passes user input to RenderForm component
   * Arguments: userInput (string)
   * Returns: userInput (string)
   */

  const [userInput, setUserInput] = useState("");
  const [showSchema, setShowSchema] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id= "input_box"
        value={userInput}
        onChange={(event) => setUserInput(event.target.value)}
      />

      <button type="submit" onClick={() => setShowSchema(true)}> Submit </button>      
      {/* Shows JSON schema if state is true */}
      {showSchema && <RenderForm userInput={userInput}/>}
    </form>
  );
};

export default InputForm;
