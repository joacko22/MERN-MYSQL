
import { Route,Routes } from 'react-router-dom'
import TaskPage from './pages/TaskPage'
import TaskForm from './pages/TaskPage'
import { NavBar } from './components/NavBar'
import NotFoundPage from './pages/NotFoundPage'
function App() {
 

  return (
    <div>
    <NavBar />
    <Routes>
      <Route path="/" element={<TaskPage/>} />
      <Route path="/new" element={<TaskForm/>} />
      <Route path="*" element={<NotFoundPage/>} />
    </Routes>
    </div>
  )
}

export default App
