import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";



export default function BaseApp({children}) {

    const navigate = useNavigate();


    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand
                        href="/"
                    >Admin</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/teachers">Teachers</Nav.Link>
                        <Nav.Link href="/students">Students</Nav.Link>
                        <Nav.Link  href="/addteacher">Add Teacher</Nav.Link>
                        <Nav.Link href="/addstudent">Add Students</Nav.Link>
                    </Nav>
                    <div className='bg-primary border border-3'>
                    <LogoutIcon fontSize="large"                   
                    className=""
            onClick={()=>{
              localStorage.removeItem("token");
              navigate("/login")
            }}
            />
            </div>
                </Container>
            </Navbar>


            <div className="children">
               

                {children}
                
               
            </div>
        </div>
    );



}
