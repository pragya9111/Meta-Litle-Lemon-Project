import './App.css';
import { Route, Routes } from "react-router-dom";
import Layout from './layout/Layout/layout';
import Home from './pages/Home/home';
import About from './pages/About/about';
import Reservations from './pages/Reservation/reservation';
import Login from './pages/Login/login';
import Menu from './pages/Menu/menu';

function App() {
  return (
    <>
      <div data-testid="app-component">
        <Layout>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/menu' element={<Menu />} />
            <Route
              path='/reservations'
              element={<Reservations />}
            />
            {/* <Route path='/order' element={<Orders />} /> */}
            <Route path='/login' element={<Login />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      </div>
    </>
  );
}

export default App;