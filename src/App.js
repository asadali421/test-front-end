import React from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom';
// import { Link } from 'react-router';
import Login from './components/Login';
import withAuth from './middleware/withAuth';
import Home from './components/Home'
// import NavBar from './components/NavBar'
// import CoursesList from './components/CoursesList'

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/secret">secret</Link>
        </li>
        <li>
          <Link to="/login">login</Link>
        </li>
      </ul>
      <div>
        <Route exact path="/secret" component={withAuth(Home)} />
        <Route path="/login" component={Login} />
      </div>
    </BrowserRouter>
  );
}

export default App;
