import "./CardComponent.css"
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import { useState, useEffect } from "react";
import Axios from "axios";

function CardComponent({ Title, image }) {
 
    
    const [number, setNumber] = useState(0);
    function Sumar() {
        setNumber(number + 1)
    }
    function Restar() {
        setNumber(number - 1)
    
    }

    useEffect(() => {
        document.title = `mi cuenta es ${number}`
    
    }, [number]);

    return (
        <div>
            <Card style={{ width: '12rem', margin:'5px' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{Title}</Card.Title>
                    <div className="button">
                        <div className="px-2"> {number} </div>
                        <Button variant="success" onClick={() => Sumar()}>Añadir</Button>{' '}
                        <Button variant="danger " onClick={() => Restar()}>Quitar</Button>{' '}
                    </div>
                </Card.Body>
            </Card>

        </div>
    )
}

// function CardComponent () {
//     const [Users, setUsers] = useState([]);
//     useEffect(() => {
//         MethodGet() 

 
//     }, []);

// async function MethodGet() {
//     let response = await Axios.get ("https://jsonplaceholder.typicode.com/users")
//     setUsers(response.data)
// }
// console.log(Users)
// return (
//     <div>hola</div>
// )
// }











export default CardComponent 