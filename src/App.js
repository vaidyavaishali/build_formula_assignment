
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './component/Homepage';
import ContactPage from './component/ContactPage';
import TaskPage from './component/TaskPage';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
      <Route path="/task" element={<TaskPage/>}/>
    </Routes>
    </BrowserRouter>

    </>
  );
}
export default App;
