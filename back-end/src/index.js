const express =  require('express');
const cors = require('cors');
const { uuid } = require('uuidv4');

const app = express();

app.use(cors());
app.use(express.json());

/*app.use((req, res, next) => {
res.header("Access-Control-Allow-Origin", "*");   
app.use(cors());
next();
});
*/



const pacientes = [];





app.get('/pacientes', (request, response) => {
    
    return response.json(pacientes);
});

app.post('/pacientes', (request, response) => {

    const body = request.body;

    const paciente = {id: uuid(), body};

    console.log(paciente);

    pacientes.push(paciente);
    

    return response.json(paciente);
});

app.put('/pacientes/:id', (request, response) => {
    const { id } = request.params;
    const { nome, dataNasc, sexo, telefone, email, altura, peso } = request.body;
    
    const pacienteIndex = pacientes.findIndex(paciente => paciente.id === id);
    
    if(pacienteIndex < 0) {
        return response.status(400).json({  error: "Paciente não encontrado"});
    }

    const paciente = { id, nome, dataNasc, sexo, telefone, email, altura, peso };

    pacientes[pacienteIndex] = paciente;

    return response.json(paciente);
});

app.delete('/pacientes/:id', (request, response) => {
    const { id } = request.params;

    const pacienteIndex = pacientes.findIndex(paciente => paciente.id === id);

    if(pacienteIndex < 0) {
        return response.status(400).json({  error: "Paciente não encontrado"});
    }

    pacientes.splice(pacienteIndex, 1);


    return response.status(204).send();
});



app.listen(3333);