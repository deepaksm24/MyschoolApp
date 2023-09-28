import { Children, createContext, useContext, useState } from "react";
import BaseApp from "../src/ccomp/base";
import { Studentdetail } from "./ccomp/studentdetail";
import { Student1 } from "./ccomp/TeacherDetails";
import Teachers from "./teachers";

export const UserContext = createContext();


export default function AppProvider({ children }) {

    const [user, setUser] = useState(Student1);

    const[student,setStudent] = useState(Studentdetail);
 
    return (

        <UserContext.Provider
            value={[user, setUser, student, setStudent]}>
            {children}

        </UserContext.Provider>

    );
}

