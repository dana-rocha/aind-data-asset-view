import { useState } from 'react';
import axios from 'axios';
import InputForm from './components/InputForm';

function App() {

  const [schema, setSchema] = useState();

  const URL = 'https://raw.githubusercontent.com/AllenNeuralDynamics/data_schema/main/schemas';

  const getSchema = async (id) => {
    try {
      // Make GET request based on input ('subject' or 'procedure') 
      const response = await axios({
        url: `${URL}/${id}.json`,
        method: 'get',
        headers: {'Content-Type' : 'application/json'}
      })
      return (
        setSchema(response.data)
      )
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <InputForm getSchemaCallback={getSchema}/>

      {/* Converts object to a string to render on the page */}
      {JSON.stringify(schema, null, 10)}
    </div>
  );
}

export default App;
