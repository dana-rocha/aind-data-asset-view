import { useState } from 'react';
import axios from 'axios';
import InputForm from './components/InputForm';
import Subject from './components/Subject';
import Procedure from './components/Procedure';


function App() {
  const [subjectSchema, setSubjectSchema] = useState([]);
  const [procedureSchema, setProcedureSchema] = useState([]);

  const subjectSchemaURL = 'https://raw.githubusercontent.com/AllenNeuralDynamics/data_schema/main/schemas/subject.json';
  const procedureSchemaURL = 'https://raw.githubusercontent.com/AllenNeuralDynamics/data_schema/main/schemas/procedures.json';

  const getSubjectSchema = () => {
    axios({
      url: subjectSchemaURL,
      method: 'get',
      headers: { "Content-Type": "application/json"}
    })
    .then((response) => {

      // Setting the data in state 
      setSubjectSchema(response.data);

    })
    .catch((error) => {
      console.log(error);
    })

  };

  const getProcedureSchema = () => {
    axios({
      url: procedureSchemaURL,
      method: 'get',
      headers: { "Content-Type": "application/json"}
    })
    .then((response) => {
      console.log("Procedure Schema", response.data)
      setProcedureSchema(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }


  return (
    <main>
      <InputForm getSubjectSchemaCallback={getSubjectSchema} getProcedureSchemaCallback={getProcedureSchema}></InputForm>
    </main>
  );
}

export default App;
 