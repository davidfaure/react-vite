import AllShips from './components/AllShips'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShipDetail from './components/ShipDetail';
const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllShips />} />
        <Route path="/:id" element={<ShipDetail />} />
      </Routes>
    </Router>
  )
}

export default App
