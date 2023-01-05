import { useState } from "react"

type MyProps = {
    initialItems: string[]
}

export const List = ({ initialItems }: MyProps) => {
    const [list, setList] = useState(initialItems)
  const [newItem, setNewItem] = useState('')

  const addToList = (newItem: string) => {
    setTimeout(() => {
      setList(state => [...state, newItem])
    }, 500)
  }
  const removeFromList = (removeItem: string) => {
    setTimeout(() => {
      setList(state => state.filter(item => item !== removeItem))
    }, 500)
  }

  return (
    <div>
      <input type="text" placeholder="new item" onChange={(e) => setNewItem(e.target.value)}/>
      <button onClick={() => addToList(newItem)}>Add to list</button>
      <ul>
        {list.map(item => (
            <li key={item}>
              {item}
              <button data-testid={item + ' Remove'} onClick={() => removeFromList(item)}>Remove</button>
            </li>
        ))}
      </ul>
    </div>
  )
}