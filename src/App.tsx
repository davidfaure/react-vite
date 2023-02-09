import { useState, useEffect } from 'react'
import './App.css'
import { getShips } from './services/graphql'

type Ships = {
  name: string
  type: string
}

const App = () => {
  const [ships, setShips] = useState<Ships[]>([])

  useEffect(() => {
    getShips().then(setShips)
  })
  return (
    <div className="App">
      {ships.map((s) => (
        <div className="ship"> {s.name}</div>
      ))}
    </div>
  )
}

export default App
