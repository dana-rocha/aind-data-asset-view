import React,{ useState } from 'react';
// import axios from 'axios';
import InputForm from './components/InputForm';

function App() {

  const [schema, setSchema] = useState([]);

  // const subjectSchemaURL = 'https://raw.githubusercontent.com/AllenNeuralDynamics/data_schema/main/schemas/subject.json';
  // const procedureSchemaURL = 'https://raw.githubusercontent.com/AllenNeuralDynamics/data_schema/main/schemas/procedures.json';

  const schema1 = [{"title": "sample schema", "type": "object", "properties": { "name": { "title": "Full Name", "type": "string"},"email": {"title": "Email Address","type": "string"}}}]

  return (
    <div>
      {/* <InputForm getSchemaCallback={getSubjectSchema} schema={schema}/> */}
      <InputForm schema={schema}/>
      <button onClick={() => setSchema((schema1))}>Use Schema 1</button>
    </div>
  );
}

export default App;
 