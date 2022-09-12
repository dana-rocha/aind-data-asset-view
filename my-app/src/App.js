import { useState } from 'react';
import axios from 'axios';
import InputForm from './components/InputForm';


function App() {
  const [subjectSchema, setSubjectSchema] = useState('');
  // const [proceduresSchema, setProceduresSchema] = useState('');

  const subjectSchemaURL = 'https://raw.githubusercontent.com/AllenNeuralDynamics/data_schema/main/schemas/subject.json';
// const proceduresSchemaURL = 'https://raw.githubusercontent.com/AllenNeuralDynamics/data_schema/main/schemas/procedures.json';

  const getSubjectSchema = () => {
    axios({
      url: subjectSchemaURL,
      method: 'get',
      headers: { "Content-Type": "application/json"}
    })
    .then((response) => {
      console.log(response.data)

      // Setting the data in state 
      setSubjectSchema(response.data);
      // console.log(subjectSchema);
    })
    .catch((error) => {
      console.log(error);
    })

    // return (
    //   <div>
    //     {subjectSchema}
    //   </div>
    // )
  };


  return (
    <main>
      <InputForm getSubjectSchemaCallback={getSubjectSchema}></InputForm>
      {/* {subjectSchema} */}
      {/* <button onClick={onButtonClick}> Submit </button> */}
    </main>
  );
}

export default App;
 