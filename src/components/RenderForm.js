import { useState } from 'react';
import axios from 'axios';

function RenderForm(props) {
  /**
   * Read user input from InputForm component.
   * Perform GET request based on user input
   * Render response from GET request
   * 
   * Arguments: props.userInput (string)
   * Returns: JSON object
   */

  let currentInput = props.userInput;

  const [schema, setSchema] = useState();

  const URL = 'https://raw.githubusercontent.com/AllenNeuralDynamics/data_schema/main/schemas';

  const getSchema = async (currentInput) => {
    /* Make GET request and update state with response*/
    try {
      const response = await axios({
        url: `${URL}/${currentInput}.json`,
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
    
    if (currentInput === 'subject' || currentInput === 'procedures') {
      /* Make GET request based on input ('subject' or 'procedure') */
    getSchema(currentInput);

    return (
      <pre id="json">
        {JSON.stringify(schema, null, 4)}
      </pre>
    )
  };

};

export default RenderForm;
