import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Proptypes from 'prop-types';



export default function VisualizarPaciente({paciente}){

    const [data, setData] = useState({
        nome: '',
        dataNasc: '',
        telefone: '',
        email: '',
        sexo: '',
        altura: '',
        peso: ''
        
      });

      useEffect(() => {
            setData(paciente.body);
            
            //console.log(response.data)
      }, []);
    


console.log(data);

    return(
        <div>
            <h3>Paciente </h3>
            <p/>
            <div>
        <label>Nome:  </label>  
        <input
          type="text"
          name="nome"
         // onChange={changeValue}
        //value={paciente}
        />
        <p/>
        <label>Telefone:  </label> 
        <input
          type="text"
          name="telefone"
        //  onChange={changeValue}
         // value={paciente.body.telefone}
        />
        <p/>
        <label>Email:  </label> 
        <input
          type="text"
          name="email"
         // onChange={changeValue}
          //value={paciente.body.email}
        />
        <p/>
        <label>Data de Nascimento:  </label> 
        <input
          type="text"
          name="dataNasc"
         // onChange={changeValue}
          //value={paciente.body.dataNasc}
        />
        <p/>
        <label>Sexo:  </label> 
        <input
          type="text"
          name="sexo"
         // onChange={changeValue}
          //value={paciente.body.sexo}
        />
        <p/>
        <label>Altura:  </label> 
        <input
          type="text"
          name="altura"
         // onChange={changeValue}
          //value={paciente.body.altura}
        />
        <p/>
        <label>Peso:  </label> 
        <input
          type="text"
          name="peso"
         // onChange={changeValue}
         // value={valueInput.peso}
        />
        <p/>
            <Link href='/pacientes'>
                <button type="button">Voltar</button>
            </Link>
        </div>
        </div>
    );
}