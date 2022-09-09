import React from 'react';

const InputForm = () => {

  const printMessage = () => {
    console.log("button clicked");
  };

  return (
    <section>
      <h2> Input form here </h2>
      <button onClick={printMessage}>Submit</button>
    </section>

  );
}

export default InputForm;
