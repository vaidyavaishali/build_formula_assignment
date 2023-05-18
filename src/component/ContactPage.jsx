import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const ContactPage = () => {
    const [taskenable, setTaskenable] = useState(true)
    const [contactData, setcontactData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
    });
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem('contactData', JSON.stringify(contactData));
        setTaskenable(false)
        alert('Form submitted successfully!');
        navigate("/")
    };


    return (
        <div className="contact-page">
            <header style={{ width: "100vw", height: "15vh" }} className='text-center pt-4 bg-light-subtle' bg="secondary">
                <h3>Contact Page</h3>
            </header>
            <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark" className='p-3' text="black">
                <Container>
                    {/* <Navbar.link href="/" >Homepage</Navbar.link> */}
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/" className='ms-4'>Homepage</Nav.Link>
                            <Navbar.Brand href="/contact" className='ms-4'>Contact Page</Navbar.Brand>
                            <Nav.Link href="/task" className='ms-4' disabled={taskenable}>Task Page</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className='contact-form pt-5'>
                <Form onSubmit={handleSubmit}>
                    <FloatingLabel controlId="floatingInput" label="FirstName" className="mb-3 input">
                        <Form.Control type="text" placeholder="enter first name" style={{ height: "7vh" }} onChange={(e) => { setcontactData({ ...contactData, firstName: e.target.value }) }} required/>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="LastName" className="mb-3 input">
                        <Form.Control type="text" placeholder="enter last name" style={{ height: "7vh" }} onChange={(e) => { setcontactData({ ...contactData, lastName: e.target.value }) }} required/>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="Email" className="mb-3 input">
                        <Form.Control type="email" placeholder="enter your email address" style={{ height: "7vh" }} onChange={(e) => { setcontactData({ ...contactData, email: e.target.value }) }} required/>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="Phone Number" className="mb-3 input">
                        <Form.Control type="number" placeholder="enter your phone number" style={{ height: "7vh" }} onChange={(e) => { setcontactData({ ...contactData, phoneNumber: e.target.value }) }} required/>
                    </FloatingLabel>
                    <Button type='submit' className='form-submit'>Add Data</Button>

                </Form>

            </div>

        </div>



    )
}
export default ContactPage