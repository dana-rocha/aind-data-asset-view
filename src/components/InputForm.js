import { useState } from 'react';
// import RenderForm from './RenderForm';

function InputForm(props) {

  const [userInput, setUserInput] = useState("")

  const onInput = (e) => {
    e.preventDefault();
    
    // console.log('inside onInput function');

    if (userInput === 'subject' || userInput === 'procedures'){
      console.log(userInput)
      // pass userInput down to RenderForm
    }
  };

  return (
    <form onSubmit={onInput}>
      <input
        type="text"
        id= "input_box"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button onClick={onInput}>Submit</button>
    </form>
  );
};

export default InputForm;
