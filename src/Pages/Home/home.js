import Header from "../../components/header/header";
import NavBar from "../../components/barranav/NavBar";
import Footer from "../../components/Footer/footer";
import Carrousel from "../../components/carrousel/carrousel";
import CardComponent from "../../components/CardComponent/CardComponent";
import Axios from "axios";

function HomePage() {
    return(
        <div>
            <Header/>
            <NavBar/>
            <Carrousel/>
           <div className="d-flex flex-wrap">
           <CardComponent Title={"thor"} image={"https://lumiere-a.akamaihd.net/v1/images/56015l02_bigsal_argentina_intpayoff_4x5_b6776139.jpeg"}/>
            <CardComponent Title={"rambo"} image={"https://es.web.img2.acsta.net/pictures/14/05/07/11/50/511600.jpg"}/>
            <CardComponent Title={"duro de matar"} image={"https://3.bp.blogspot.com/-fbqgbW-x-XY/XZC6u0dKPII/AAAAAAAAtXE/UsxTgFQIPgo1800lp3yPx2_4KOE7Jn6lQCKgBGAsYHg/s1600/die-hard-4-duro-de-matar.jpg"}/>
            <CardComponent Title={"turno de dia"} image={"https://cloudfront-us-east-1.images.arcpublishing.com/infobae/MJ4XWBXCDNA5BMOTTV6ITGYYTY.jpg"}/>
            <CardComponent Title={"turno de dia"} image={"https://cloudfront-us-east-1.images.arcpublishing.com/infobae/MJ4XWBXCDNA5BMOTTV6ITGYYTY.jpg"}/>
            <CardComponent Title={"turno de dia"} image={"https://cloudfront-us-east-1.images.arcpublishing.com/infobae/MJ4XWBXCDNA5BMOTTV6ITGYYTY.jpg"}/>
           
           </div>

            <Footer/>
        </div>
    )
}

export default HomePage; 