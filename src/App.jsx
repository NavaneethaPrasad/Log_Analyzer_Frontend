import { useState } from 'react'
import './App.css'
import BasicTable from './table'
import CheckboxLabels from './filter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <h2 className="text-center text-2xl font-semibold mb-6">Search Logs</h2>
      <CheckboxLabels/>
     <BasicTable/>
     </div>
    </>
  )
}

export default App
