import { Form, FloatingLabel, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <div className='d-flex flex-column align-items-center'>
        <h1 className="mt-5">Cuentanos, ¿en qué podemos ayudar?</h1>
        
        <Form className="w-50">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo</Form.Label>
            <Form.Control type="email" placeholder="Ingrese Correo" />
          </Form.Group>

          <FloatingLabel className="mb-3" controlId="floatingTextarea2" label ="Descripción">
            <Form.Control
              as="textarea"
              placeholder="Ingrese la descripción aquí"
              style={{ height: '100px' }}
            />
          </FloatingLabel>
         
          <Button variant="navRed" type="submit">
            Enviar
          </Button>
        </Form>
    </div>
  )
}

export default Contact