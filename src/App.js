import './App.scss';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
function App() {
  return (
    <BrowserRouter className="App">

        <Header /> 
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>

    </BrowserRouter>
  );
}

export default App;
