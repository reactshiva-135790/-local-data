import { useState } from "react";
import Employees from "./Employee";
import { Link, useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';

const Create = () => {
    const [name, setName] = useState(" ")
    const [age, setAge] = useState("")

    let history = useNavigate();

    const handleSubmit = (e) => {
    e.preventDefault();
    
    const ids = uuidv4();

    let uniqueId = ids.slice(0,8);

    let a = name,
    b= age;
    Employees.push({
        id : uniqueId,
        name : name,
        age : age,
    })
    history("/")

    }

    return (
        <div>
            <form class="row g-3">
                <div class="col-auto">
                    <label for="inputPassword2" class="visually-hidden">Password</label>
                    <input type="text" class="form-control" id="inputPassword2" onChange={(e) => setName(e.target.value)} />
                </div>
                <div class="col-auto">
                    <label for="inputPassword2" class="visually-hidden">Password</label>
                    <input type="text" class="form-control" id="inputPassword2" onChange={(e) => setAge(e.target.value)} />
                </div>
                <div class="col-auto">
                    <button type="submit" onClick={(e) => handleSubmit(e)} class="btn btn-primary mb-3">Confirm identity</button>
                </div>
            </form>

        </div>
    )
}

export default Create