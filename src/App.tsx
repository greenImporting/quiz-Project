import { useState } from 'react'
import twinnn from './assets/ganster.jpg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
      <h1>hi whatsapp hello</h1>
      <div>
        <button className="button" onClick={() => setCount((count) => count + 1)}>
          <h2 className='hover-text'>{count}</h2>
          <img src={twinnn} className="logo" alt="gansger" />
        </button>
      </div>
      </main>
    </>
  )
}

export default App
