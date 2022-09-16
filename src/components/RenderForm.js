// import { useState } from 'react';
// import axios from 'axios';

// // This component needs to:
// //  1. pull in user input from InputForm
// //  2. perform GET request based on user input from #1
// //  3. Render the response from the GET request

// const [schema, setSchema] = useState();

// const URL = 'https://raw.githubusercontent.com/AllenNeuralDynamics/data_schema/main/schemas';

// const getSchema = async (id) => {
//   try {
//     // Make GET request based on input ('subject' or 'procedure') 
//     const response = await axios({
//       url: `${URL}/${id}.json`,
//       method: 'get',
//       headers: {'Content-Type' : 'application/json'}
//     })
//     return (
//       setSchema(response.data)
//     )
//   } catch (error) {
//     console.log(error);
//   }
// };

//   {/* Converts object to a string to render on the page */}
//   {JSON.stringify(schema, null, 10)}