// import Header from '../src/components/header';
import HomePage from './Pages/Home/home';
import AdminPage from './Pages/Admin/admin';
import Nosotros from './Pages/nosotros/nosotros';
import {Routes , Route, BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
        </Route>
        <Route path= "/Admin" element={<AdminPage/>}>
        </Route>
        <Route path= "/nosotros" element={<Nosotros/>}>
        </Route>


      </Routes>

    </BrowserRouter>



  );
}

export default App;

