import { useState, useEffect } from 'react'
import './App.css'
import { getShips } from './services/graphql'
import { Ships } from './models'

const App = () => {
  const [ships, setShips] = useState<Ships[]>([])

  useEffect(() => {
    getShips().then(setShips)
  });


  console.log(ships, "SHIPS");

  return (
    <div className="App">
      {ships.map((s) => (
        <div className="ship" key={s.id}>
          <p>{s.name}</p>
          <img src={s.image} alt={s.name} />
        </div>
      ))}
    </div>
  )
}

export default App
