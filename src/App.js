import './App.css';
import { BrowserRouter as Router, NavLink, Routes, Route } from "react-router-dom";
import  OriginalPage  from './OriginalPage.js';
import  OriginalSinglePage  from './OriginalSinglePage.js';
import  AdminLogin  from './AdminLogin.js';
import  AdminPage  from './AdminPage.js';
import NewPage from './NewPage.js';
import ModePage from './ModePage.js';
import DeletePage from './DeletePage.js';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to={`/get-all`} className="nav-link">
              <span className="nav-link">Főoldal</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={`/post`} className="nav-link">
              <span className="nav-link">Új hozzáadása</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={`/admin`} className="nav-link">
              <span className="nav-link">Admin</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
      <Routes>
        <Route path='/get-all' element={ <OriginalPage/> }/>
        <Route path='/get-all/:id' element={ <OriginalSinglePage/> }/>
        <Route path='/admin' element={ <AdminLogin/> }/>
        <Route path='/admin/get-all' element={ <AdminPage/> }/>
        <Route path='/post' element={ <NewPage/> }/>
        <Route path='/edit/:id' element={ <ModePage/> }/>
        <Route path='/delete/:id' element={ <DeletePage/> }/>
      </Routes>
    </Router>
  );
}

export default App;
