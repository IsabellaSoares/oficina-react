import React, { useState, useEffect } from 'react';

import User from './User';

import './App.css';

const data = [
  {
    name: 'Isa',
    description: 'Gosta de sorvete'
  },
  {
    name: 'Cintia',
    description: 'Gosta de goiabada cascão'
  },
  {
    name: 'Monica',
    description: 'Gosta de mousse'
  }
];

function App() {
  const [users, setUsers] = useState(data);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    console.log('Componente App montado! :D');
  }, []);
  
  useEffect(() => {
    console.log(`Input "description" foi alterado >>> ${description}`);
  }, [description]);
  
  useEffect(() => {
    console.log(`Input "name" foi alterado >>> ${name}`);
  }, [name]);
  
  useEffect(() => {
    console.log('A lista de usuários foi atualizada! :D');
  }, [users]);
  
  useEffect(() => {
    console.log('Alguma variável de estado foi alterada!');
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    setUsers([ ...users, { name, description } ]);
  }

  return (
    <div className="App">
      {
        users.map((user, index) => (
          <User
            key={index}
            name={user.name}
            description={user.description}
          />
        ))
      }

      <form>
        <input type='text' value={name} onChange={(event) => setName(event.target.value)} />
        <input type='text' value={description} onChange={(event) => setDescription(event.target.value)} />
        <button type='submit' onClick={(event) => handleSubmit(event)}>Criar novo usuário</button>
      </form>
    </div>
  );
}

export default App;
