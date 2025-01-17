import { useState } from 'react'
import './App.css'
import { BusinessCard } from './Components/BusinessCard'
import { InputDetails } from './Components/InputDetails'

function App() {
  const [people, setPeople] = useState([])
  fetch("https://businesscard-backend-v4tt.onrender.com").then(async function(res){
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
