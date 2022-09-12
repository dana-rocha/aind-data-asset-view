import React from 'react';

const InputForm = (props) => {

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("inside handle submit")
    props.getSubjectSchemaCallback();
    props.getProcedureSchemaCallback();
  };


  return (
    <form onSubmit={handleSubmit}>
      <input type="text"></input>
      <button type="submit"> Submit </button>
    </form>
  );
}

export default InputForm;
