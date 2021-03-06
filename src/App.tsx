import React, { useState } from 'react';

function App() {
  const [newItem, setNewItem] = useState('')
  const [list, setList] = useState(['Joao', 'Mario', 'Mayk'])

  function addToList () {
    setTimeout(() => {
      setList(state => [...state, newItem])
    }, 500)
  }

  function RemoveFromList (item: string) {
    setTimeout(() => {
      setList(state => state.filter(listItem => listItem !== item))
    }, 500)
  }

  return (
    <div>
      <label>
        New item
        <input placeholder='add new text' type="text" onChange={e => setNewItem(e.target.value)} />
      </label>
      <button onClick={addToList}>Adicionar</button>
      <ul>
        {list.map(item => (
          <li key={item}>
            {item}
            <button onClick={() => RemoveFromList(item)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
