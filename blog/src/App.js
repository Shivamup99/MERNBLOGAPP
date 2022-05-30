import React from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Settings from './pages/Settings';
import Single from './pages/Single';
import Write from './pages/Write';
import Register from './pages/Register'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/single/:id' element={<Single/>}/>
          <Route path='/post' element={<Write/>}/>
          <Route path='/settings' element={<Settings/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
