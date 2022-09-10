import { useState } from 'react';
import axios from 'axios';
import InputForm from './components/InputForm';

function App() {
  const [subjectSchema, setSubjectSchema] = useState('');
  // const [proceduresSchema, setProceduresSchema] = useState('');

  const subjectSchemaURL = 'https://github.com/AllenNeuralDynamics/data_schema/blob/main/schemas/subject.json';
  // const proceduresSchemaURL = 'https://github.com/AllenNeuralDynamics/data_schema/blob/main/schemas/procedures.json';

  const getSubjectSchema = () => {
    axios.get(subjectSchemaURL)
      .then((response) => {

        // Setting the data in state
        setSubjectSchema(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  };


  return (
    <main>
      <InputForm getSubjectSchemaCallback={getSubjectSchema}></InputForm>
    </main>
  );
}

export default App;
 