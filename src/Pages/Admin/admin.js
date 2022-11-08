import './admin.css';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

import Header from "../../components/header/header";
import NavBar from "../../components/barranav/NavBar";
import Footer from "../../components/Footer/footer";



function AdminPage() {
    return (
        <div>
            <Header />
            <NavBar />
            <section className="container-nosotros">
            <h1 className='d-flex justify-content-center'>Administracion</h1>

            </section>
            <Footer/>
        </div>
    )
}

export default AdminPage;




