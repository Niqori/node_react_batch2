import { useState } from 'react'
import reactLogo from './assets/logo.png'
import './App.css'
import { Form } from '../components/Form'
// import { Input } from '../components/Input'

function App() {
      const [count, setCount] = useState(0)
      let thingsToDo = [
        "Belajar GIT & CLI",
        "Belajar HTML & CSS",
        "Belajar Javascript",
        "Belajar ReactJS Dasar",
        "Belajar ReactJS Advance"
      ]

  return (
    <>
      <div className='container'>
          <img src={reactLogo} className="logo" alt="" />
          <div className='container-list'>
            <div className='container-title'>
                  <h1>THINGS TO DO</h1>
                  <p>During bootcamp in sanbercode</p>
            </div>
              <Form data={thingsToDo}></Form>
          </div>
      </div>
    </>
  )
}

export default App
