import './footer.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Footer() {
    return (
        <div className='conteiner'>
            <div className='container-footer'>
       
                  <div className='newsletter'>

                    <Form.Group className=" ">
                        <Form.Label className=''><h4>Newsletter</h4></Form.Label>
                        <Form.Control type="email" placeholder="Ingresar email" /></Form.Group>
                    <Button className='submit' variant="primary" type="submit">Enviar</Button>
                    <Form.Group />
                    <div></div>
                </div>
            </div>

        </div>
    )
}

export default Footer





    // <Form>

    // </Form>



