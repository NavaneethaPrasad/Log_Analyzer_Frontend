import './App.css'
import Form from './form'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import LogAnalyserUI from './component/home'

function App() {

  return (
    <BrowserRouter>
      <h2 className="text-center text-2xl font-semibold mb-6">Search Logs</h2>

      <Routes>
        <Route path="/" element={<LogAnalyserUI />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
