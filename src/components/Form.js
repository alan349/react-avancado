import { useState } from "react";

function Form() {

  const [fields, setFields] = useState({
    name: "",
    lastName: "",
    gender: "",
    description: ""
  })

  function handleChange(event) {
    const fieldName = event.target.name;
    const value = event.target.value;
    setFields({ ...fields, [fieldName]: value })
  }


  function handleSubmit(event){
    event.preventDefault();
  }

  return (
    <div>
      <br />
      {fields.name} {fields.lastName} {fields.gender}
      <br />
      {fields.description}
      <br />
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" name="name" value={fields.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Sobrenome:
          <input type="text" name="lastName" value={fields.lastName} onChange={handleChange} />
        </label>
        <br />
        <label>
          Gênero:
          <select name="gender" value={fields.gender} onChange={handleChange} >
            <option>Selecione</option>
            <option>Masculino</option>
            <option>Feminino</option>
          </select>
        </label>
        <br />
        <label>
          Descrição
          <textarea name="description" value={fields.description} onChange={handleChange} />
        </label>
        <br />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default Form;
