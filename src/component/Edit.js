import { useState } from "react";
import Employees from "./Employee";
import { Link, useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from "react";


const Edit = () => {
    const [name, setName] = useState(" ")
    const [age, setAge] = useState("")
    const [id, setId] = useState("")

    const del = Employees.map((e) => {
        return (
            e.id
        )
    }).indexOf(id)


    const handleSubmit = (e) => {
        e.preventDefault();

        let a = Employees[del];
        a.name = name;
        a.age = age;


        history("/")

    }

    useEffect(() => {
        setName(localStorage.getItem("name"))
        setAge(localStorage.getItem("age"));
        setId(localStorage.getItem("id"))
    }, [])

    let history = useNavigate();
    return (
        <>
            <form class="row g-3">
                <div class="col-auto">
                    <label for="inputPassword2" class="visually-hidden">Password</label>
                    <input type="text" class="form-control" id="inputPassword2" value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>
                <div class="col-auto">
                    <label for="inputPassword2" class="visually-hidden">Password</label>
                    <input type="text" class="form-control" id="inputPassword2"
                        value={age} onChange={(e) => setAge(e.target.value)} />
                </div>
                <div class="col-auto">
                    <button type="submit" onClick={(e) => handleSubmit(e)} class="btn btn-primary mb-3">Confirm identity</button>
                </div>
            </form>

        </>
    )
}

export default Edit;