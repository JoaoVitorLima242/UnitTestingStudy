import { useState } from "react";

function App() {
  const [list, setList] = useState(['Joao', 'Pedro', 'Vitor'])
  const [newItem, setNewItem] = useState('')

  const addToList = (newItem: string) => {
    setList(state => [...state, newItem])
  }

  return (
    <div>
      <input type="text" placeholder="new item" onChange={(e) => setNewItem(e.target.value)}/>
      <button onClick={() => addToList(newItem)}>Add to list</button>
      <ul>
        {list.map(item => (<li key={item}>{item}</li>))}
      </ul>
    </div>
  );
}

export default App;
