import { useState } from 'react';
import axios from 'axios';
import InputForm from './components/InputForm';

function App() {
  const [subjectSchema, setSubjectSchema] = useState('');

  const subjectSchemaURL = 'https://raw.githubusercontent.com/AllenNeuralDynamics/data_schema/main/schemas/Subject%20schema.json';

  const getSubjectSchema = () => {
    axios.get(subjectSchemaURL)
      .then((response) => {
        console.log(response.data)

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
 