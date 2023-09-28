import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router-dom";
import BaseApp from '../ccomp/base';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Studentdetail } from './studentdetail';
import { Student1 } from './TeacherDetails';


function Teacherview() {
    const { id } = useParams();

    const student = Student1[id];


    return (

        <BaseApp>

            <Container id="teachercontainer">
                <Row className="justify-content-center mt-5 p-3">


                    <Col>
                        <Card id="card" >
                            <Card.Header><h1>Teacher Name: {student.name}</h1></Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <h4>ID: {student.id}</h4>
                                    <h4>Class: {student.class}</h4>
                                    <h4>Subject: {student.subject}</h4>
                                    <h5>Class: {student.experience}</h5>
                                </Card.Text>

                            </Card.Body>
                        </Card>

                    </Col>




                </Row>



            </Container>


        </BaseApp>



    )
}

export default Teacherview