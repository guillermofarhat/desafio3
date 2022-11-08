import "./carrousel.css"
import Carousel from 'react-bootstrap/Carousel';

function Carrousel() {
    return (
        <div>
            <Carousel variant="light">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.vertigofilms.es/wp-content/uploads/2022/09/SLIDER-4.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://ojoglobalnoticias.com/wp-content/uploads/2020/03/Captura-de-Pantalla-2020-03-18-a-las-0.27.01-768x306.png"
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-40"
                        src="https://www.bienestarcolsanitas.com/images/2-SECCIONES/TIEMPO-LIBRE/RECOMENDACIONES/PLEICULAS_BIENESTAR/PELISSLIDE.jpg"
                        alt="Third slide"
                    />

                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Carrousel