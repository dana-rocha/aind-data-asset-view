import { useState }from 'react';

const InputForm = (props) => {

  const [userInput, setUserInput] = useState("")

  const onInput = (e) => {
    e.preventDefault();
    
    if (userInput === 'subject' || userInput === 'procedures'){
      props.getSchemaCallback(userInput)
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
