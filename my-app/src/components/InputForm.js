import React from 'react';
// import { useState } from 'react';

const InputForm = (props) => {

  // console.log(props);

  // const [formData, setFormData] = useState('');

  // const printMessage = () => {
  //   console.log("button clicked");
  // };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("inside handle submit")
    props.getSubjectSchemaCallback();
  };


  return (
    <form onSubmit={handleSubmit}>
      <input type="text"></input>
      <button type="submit"> Submit </button>
    </form>

  );
}

export default InputForm;
