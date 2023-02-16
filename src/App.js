import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Header from './components/modules/header';
import { MainPage } from './components/pages/MainPage'
import { Page1 } from './components/pages/Page1'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Header />
          <Link to="/">Home</Link>
          <br />
          <Link to="/page1">Page1</Link>
          <br />
          <Routes>
            <Route exact path="/" element={<MainPage />} />
            <Route path='/page1' element={<Page1 />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
