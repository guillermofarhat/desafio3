import "./nosotros.css";
import Header from "../../components/header/header";
import NavBar from "../../components/barranav/NavBar";
import Footer from "../../components/Footer/footer";


function Nosotros() {
    return(
        <div>
            <Header/>
            <NavBar/>
            <section className="container-nosotros">
            <h1 className='d-flex justify-content-center '>Quienes Somos</h1>
            </section>
            <Footer/>

        </div>
    )
}

export default Nosotros;