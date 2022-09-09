import React from 'react';
import { useState } from 'react';

const InputForm = () => {
  const [formData, setFormData] = useState();

  const printMessage = () => {
    console.log("button clicked");
  };

  return (
    <form>
      <input></input>
      <button onClick={printMessage}>Submit</button>
    </form>

  );
}

export default InputForm;
