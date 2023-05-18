import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
// import {NavLink} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
const Homepage = () => {
    const [storedData, setStoredData] = useState(localStorage.getItem('contactData'))
    const [data, setData] = useState({});
    const [taskenable, setTaskenable] = useState(true)
    const navigate = useNavigate()
    
    useEffect(() => {
        if (storedData) {
            setData(JSON.parse(storedData))
            setTaskenable(false)
        } else {
            setData({})
        }
    }, [storedData])

    const handleClear = () => {
        if (window.confirm('Are you sure you want to clear?')) {
            localStorage.removeItem('contactData');
            setStoredData(JSON.stringify({}));
            setData(JSON.stringify({}))
        }
    };
    return (
        <div className='home text-center'>
            <header style={{ width: "100vw", height: "15vh" }} className='text-center pt-4 bg-light-subtle' bg="secondary">
                <h1>Welcome to home page</h1>
            </header>
            <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark" className='p-3'>
                <Container>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Navbar.Brand  href ="/"className='ms-4 text-white fs-5 text-decoration-none '>Homepage</Navbar.Brand >
                            <NavLink to="/contact" className='ms-4 text-light fs-7 text-decoration-none'>Contact Page</NavLink>
                            <NavLink to="/task" className='ms-4 text-light fs-7 text-decoration-none' disabled={taskenable}

                            >Task Page</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div id="home-data">
                <Button type='button' className='warning m-4' onClick={handleClear}>Clear</Button>

                {Object.keys(data).length > 0 && (
                    <div>
                        {/* <h2>Stored Data:</h2> */}
                        <p> <b style={{ float: "left" }}> First Name: </b>{data.firstName}</p>
                        <p> <b style={{ float: "left" }}> Last Name: </b>{data.lastName}</p>
                    </div>
                )}

            </div>
            
        </div>

    )
}
export default Homepage