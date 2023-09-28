import React from "react";
import { createContext, useContext, useState } from "react";

import BaseApp from "../ccomp/base";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { UserContext } from "../Appprovider";
import { useNavigate } from "react-router-dom";

export default function Students() {
  const navigate = useNavigate();

  const [user, setUser, student, setStudent] = useContext(UserContext);

  const deleteUser = (idx) => {
    const alterList = student.filter((per) => per.id !== idx);
    setStudent(alterList);
  };

  return (
    <BaseApp>
      <Container className="jusify-content-centre mt-2">
        <h2>All Student DETAILS</h2>
      </Container>
      <Container fluid id="teachercontainer">
        <Row className="justify-content-center">
          {student.map((student, index) => (
            <Col lg={6} sm={12} md={6}>
              <Card id="card">
                <Card.Header>
                  <h1>Student Name: {student.name}</h1>
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    <h4>Class: {student.class}</h4>
                    <h5>Grade: {student.Grade}</h5>
                  </Card.Text>
                  <Button
                    className=""
                    variant="info"
                    onClick={() => navigate(`/editstudent/${index}`)}
                  >
                    Edit
                  </Button>
                  <Button
                    className="m-2"
                    variant="secondary"
                    onClick={()=>navigate(`/student/${index}`)}
                  >
                    View
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => deleteUser(student.id)}
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </BaseApp>
  );
}
