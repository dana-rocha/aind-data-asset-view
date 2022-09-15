import React,{ useState } from 'react';

function App() {

  const [schema, setSchema] = useState();

  const subjectSchemaURL = 'https://raw.githubusercontent.com/AllenNeuralDynamics/data_schema/main/schemas/subject.json';

  const getSchema = () => {
    fetch(subjectSchemaURL)
      .then((response) => response.json())
      .then((json) => setSchema(json));
  }

  return (
    <div>
      <button onClick={() => getSchema()}> Get Subject Schema</button>
      {JSON.stringify(schema, null, 4)}
    </div>
  );
}

export default App;
 