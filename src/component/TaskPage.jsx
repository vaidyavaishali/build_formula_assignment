import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
const TaskPage = () => {
    const [task, setTask] = useState([])
    const [addNew, setAddnew] = useState("")

    const AddNewTask = () => {
        if (addNew.trim() !== "") {
            setTask((prev) => [...prev, addNew])
            setAddnew("")
        }
    }

    const DeleteTask = (index) => {
        setTask((items) => items.filter((_, i) => i !== index));
    }

    const updateTask = (id, updatedTask) => {
        setTask((prev) => (
            prev.map((task, i) => (i === id ? updatedTask : task))))
    }

    return (
        <div id='taskPage'>
            <header style={{ width: "100vw", height: "15vh" }} className='text-center pt-4 bg-light-subtle' bg="secondary">
                <h3>Task Page</h3>
            </header>
            <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark" className='p-3' text="black">
                <Container>
                    {/* <Navbar.link href="/" >Homepage</Navbar.link> */}
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/" className='ms-4'>Homepage</Nav.Link>
                            <Nav.Link href="/contact" className='ms-4'>Contact Page</Nav.Link>
                            <Navbar.Brand href="/task" className='ms-4'>Task Page</Navbar.Brand>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div id='task-container'>
                <div>
                    <input type='text' placeholder='Enter new task' value={addNew} onChange={(e) => { setAddnew(e.target.value) }} />
                    <Button onClick={AddNewTask} id='add-task' variant="success"><i className="fa fa-plus" aria-hidden="true"></i></Button>
                </div>
                <div id='task'>
                    {task.map((items, i) => {
                        return (
                            <div id='task-list'>

                                <li key={i}>
                                    {items}
                                </li>
                                <span>
                                    <button onClick={() => DeleteTask(i)} className='me-2' style={{border:"none", color:"red"}} ><i class="fa fa-trash" aria-hidden="true" ></i></button>
                                    <button onClick={() => updateTask(i, prompt('Enter updated task:', task))} className='ms-2 ' style={{border:"none", color:"blue"}}><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                                </span>

                            </div>
                        )
                    })}
                </div>
            </div>
            

        </div>
    )
}
export default TaskPage