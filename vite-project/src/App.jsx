import { useState } from 'react'
import './App.css'
import { BusinessCard } from './Components/BusinessCard'
import { InputDetails } from './Components/InputDetails'

function App() {
  const [people, setPeople] = useState([])
  fetch("http://localhost:3000/").then(async function(res){
    const json = await res.json();
    setPeople(json.people);
  })
  return (
    <div>
      <InputDetails />
      <BusinessCard people={people}/>
    </div>
  )
}

export default App
