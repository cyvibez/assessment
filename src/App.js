import Details from './Component/UsersDetails/Index';
import Home from './Home/Index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (

      <Router>
        <div className="App">
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/users/:id' element={<Details />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
