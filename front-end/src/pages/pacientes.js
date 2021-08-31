import React, { useState, useEffect} from 'react';
import Link from 'next/link';
import api from './services/api';
import VisualizarPaciente from './visualizarPaciente';

export default function Pacientes(){

    const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    api.get('pacientes').then(response => {
        setPacientes(response.data);
        
        //console.log(response.data)
  });
}, []);
  // console.log('Pacientes',pacientes) 
  


    return(
        <div>
            <h3>Todos os pacientes</h3>
            <p/>
            <Link href="/novoPaciente">
                <button>Incluir Paciente</button>
            </Link>
            <p/>
            <table>
             <caption/>
                <thead>
                    <tr>
                    <th>Nome</th>
                    <th>Data de Nascimento</th>
                    <th>Telefone</th>
                    <th>Email</th>
                    <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {pacientes.map(paciente => (
                    <tr key={paciente.id}>
                        <td>{paciente.body.nome}</td>
                        <td>{paciente.body.dataNasc}</td>
                        <td>{paciente.body.telefone}</td> 
                        <td>{paciente.body.email}</td>  
                        <td>
                            <Link href="/visualizarPaciente">
                            <button onClick={() => VisualizarPaciente({paciente})}>Visualizar</button>
                            </Link>
                        </td>   

                    </tr>
                    ))}
                </tbody>
            </table>        
        </div>
    );
}