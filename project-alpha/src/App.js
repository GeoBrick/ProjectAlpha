import { Route, Routes } from 'react-router-dom';
import './App.css';
import ChatPage from './pages/chat';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<ChatPage />} />
      </Routes>  
    </div>
  );
}

export default App;
