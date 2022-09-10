import React from 'react';
// import { useState } from 'react';

const InputForm = (props) => {

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("inside handle submit")
    props.getSubjectSchemaCallback();
  };


  return (
    <form onSubmit={handleSubmit}>
      <input type="text"></input>
      <input type="submit"></input>
    </form>

  );
}

export default InputForm;
