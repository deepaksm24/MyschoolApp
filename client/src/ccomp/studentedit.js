import React, { useContext, useState } from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import { UserContext } from '../Appprovider';
import BaseApp from './base'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useParams } from "react-router-dom";
import { Studentdetail } from './studentdetail';







export default function Studentedit() {

 const navigate = useNavigate();

    const [user, setUser, student, setStudent] = useContext(UserContext);


    const { id } = useParams();

    const selectedUser = Studentdetail[id];


    const [name, setName] = useState(selectedUser.name);
    const [grade, setGrade] = useState(selectedUser.Grade);
    const [classn, setClassn] = useState(selectedUser.class);

    const updateUser = () => {
        const uppUser = {
            id,
            name,
            class: classn,
            Grade: grade
        }
        Studentdetail[id] = uppUser;

        setStudent([...Studentdetail]);
        navigate("/students")
    }

    return (
        <BaseApp>
<Container className='jusify-content-centre mt-2'>

<h2>Edit Student Details</h2>
   </Container>
            <Container className='mt-5 p-2'>
                <Card>
                    <div>
                        <h1>ID: {selectedUser.id}</h1>
                        <br />
                        Name: <input
                            className='m-3 p-2'
                            placeholder={name}
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                        <br />
                        Grade: <input
                            className='m-3 p-2'
                            placeholder={grade}
                            value={grade}
                            onChange={(event) => setGrade(event.target.value)}
                        />
                        <br />
                        Class: <input
                            className='m-3 p-2'
                            placeholder={classn}
                            value={classn}
                            onChange={(event) => setClassn(event.target.value)}
                        />
                        <br />
                        <Button
                            className='m-3 p-2'
                            variant='success'
                            onClick={updateUser}
                        >Update
                        </Button>

                    </div>

                </Card>

            </Container>

        </BaseApp>
    )
}
