import './App.css';
import { BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import Library from './Components/Library';

function App() {
  return (
    <div className="App">
      <Router>
      <header>
        <ul>
          <li>
            <Link to='/'>Home</Link>
            </li>
          <li>
            <Link to='/library'>Library</Link>
            </li>
        </ul>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<h1>Home</h1>} />
          <Route path='/library' element={<Library />} />
        </Routes>
      </main>
      </Router> 
    </div>
    
  );
}

export default App;
