import './App.css';
import { Route, Routes } from "react-router-dom"
import Aside from './Components/Aside/Aside';
import Overview from './Pages/Overview/Overview';
import Tickets from './Pages/Tickets/Tickets';
import Ideas from './Pages/Ideas/Ideas';
import Contact from './Pages/Contact/Contact';
import Header from './Components/Header/Header';
import { useContext } from 'react';
import { AuthContext } from './Components/Context/AuthContext';
import Login from './Pages/Login/Login';

function App() {
  let { token } = useContext(AuthContext)

  return (
    <div className="App">
      {
        token ? (
          <>

            <Aside />
            <div className="content">
              <Header />

              <Routes>
                <Route path='/' element={<Overview />} />
                <Route path='/tickets' element={<Tickets />} />
                <Route path='/ideas' element={<Ideas />} />
                <Route path='/contacts' element={<Contact />} />
                <Route path='*' element={<h1>Page Not found</h1>} />
              </Routes>
            </div>

          </>
        ) : (
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='*' element={<h1>Page Not found</h1>} />
          </Routes>
        )
      }
    </div>
  );
}

export default App;
