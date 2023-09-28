import React, { useContext, useState } from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import { UserContext } from '../Appprovider';
import BaseApp from './base'
import { useNavigate } from "react-router-dom";

export default function Addteacher() {
    const navigate = useNavigate();

    const [user, setUser] = useContext(UserContext);


    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [experience, setExperience] = useState();
    const [subject, setSubject] = useState("");
    const [classn, setClassn]= useState("");


    const addNewUser = ()=>{

        if(id!==""){
                const newUser = {
                    id,
                    name,
                    class:classn,
                    experience,
                    subject
                }
               
                setUser([...user, newUser])
                 navigate("/teachers")
            }
            } 


    return (
        <BaseApp>
         <Container className='jusify-content-centre mt-2'>

<h2>ADD TEACHER DETAILS</h2>
   </Container>
        <Container className='mt-5 p-2'>
            <Card>
                <div>
                    <input
                    className='m-3 p-2'
                        placeholder="id"
                        value={id}
                        onChange={(event) => setId(event.target.value)}
                    />
                    <br />
                    <input
                    className='m-3 p-2'
                        placeholder="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                    <br />
                    <input
                    className='m-3 p-2'
                        placeholder="Subject"
                        value={subject}
                        onChange={(event) => setSubject(event.target.value)}
                    />
                    <br />
                    <input
                    className='m-3 p-2'
                        placeholder="experience"
                        value={experience}
                        onChange={(event) => setExperience(event.target.value)}
                    />
                    <br />
                    <input
                    className='m-3 p-2'
                        placeholder="class"
                        value={classn}
                        onChange={(event) => setClassn(event.target.value)}
                    />
                    <br />
                    <Button
                    className='m-3 p-2'
                    variant='success'
                    onClick={addNewUser}
                    >Add
                    </Button>
                   
                </div>

            </Card>

            </Container>
        </BaseApp>
    )
}

