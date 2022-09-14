import React from 'react';

const InputForm = (props) => {

  const current_schema = props.schema;
  
  const schemaComponents = current_schema.map((data) => {
    return (
      <div>
          <li>{data.title}</li>
          <li>{data.type}</li>
          {/* <li>{data.properties}</li> */}
      </div>
    )
  });

  return (
    <section>
      <ul>
        {schemaComponents}
      </ul>
    </section>
  );
};

export default InputForm;
