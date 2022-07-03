import React, { useState } from 'react';

function App() {
  const [list, setList] = useState(['Joao', 'Mario', 'Mayk'])

  function addToList () {
    setList(state => [...state, 'Novo'])
  }

  return (
    <div >
      <button onClick={addToList}>Adicionar</button>
      <ul>
        {list.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
