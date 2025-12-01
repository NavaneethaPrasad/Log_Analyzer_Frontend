import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import LogAnalyserUI from './component/home'

function App() {

  return (
    <BrowserRouter>
     <h2 className="text-center text-4xl font-bold mb-10 tracking-wide text-gray-800">
  Search Logs
</h2>

      <Routes>
        <Route path="/" element={<LogAnalyserUI />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
