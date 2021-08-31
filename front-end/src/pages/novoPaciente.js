import Link from "next/link";
import React, {useState, useEffect} from "react";
import api from './services/api';

export default function novoPaciente() {
  
  const [valueInput, setValue] = useState({});


  const changeValue = e => {

    const auxValues = { ...valueInput };
    
    auxValues[e.target.name] = e.target.value;
    

    setValue(auxValues);
  };

  function handleAddProject(){
    console.log(valueInput);
    api.post('pacientes', valueInput)
  }


  const functionSubmit = e => {
    e.preventDefault();
    console.log(valueInput);
  };

  return (
    <form onSubmit={functionSubmit}>
      <div>
        <label>Nome:  </label>  
        <input
          type="text"
          name="nome"
          onChange={changeValue}
          value={valueInput.nome}
        />
        <p/>
        <label>Telefone:  </label> 
        <input
          type="text"
          name="telefone"
          onChange={changeValue}
          value={valueInput.telefone}
        />
        <p/>
        <label>Email:  </label> 
        <input
          type="text"
          name="email"
          onChange={changeValue}
          value={valueInput.email}
        />
        <p/>
        <label>Data de Nascimento:  </label> 
        <input
          type="text"
          name="dataNasc"
          onChange={changeValue}
          value={valueInput.dataNasc}
        />
        <p/>
        <label>Sexo:  </label> 
        <input
          type="text"
          name="sexo"
          onChange={changeValue}
          value={valueInput.sexo}
        />
        <p/>
        <label>Altura:  </label> 
        <input
          type="text"
          name="altura"
          onChange={changeValue}
          value={valueInput.altura}
        />
        <p/>
        <label>Peso:  </label> 
        <input
          type="text"
          name="peso"
          onChange={changeValue}
          value={valueInput.peso}
        />
        <p/>
        <button type="button" onClick={handleAddProject}>Enviar</button>
        <h3>     </h3>
        <Link href="/">
          <button type="button">Voltar</button>
        </Link>
      </div>
    </form>
      
  );
};