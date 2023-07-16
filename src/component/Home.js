import Employees from "./Employee";
import { Link, useNavigate } from "react-router-dom"

const Home = () => {
    let history = useNavigate();
    const handleDelete = (id) => {
        const del = Employees.map((e) => {
            return (
                e.id
            )
        }).indexOf(id)
        Employees.splice(del, 1)
        history("/")
    };

    const handleEdit = (id, name, age) => {
        localStorage.setItem("id", id)
        localStorage.setItem("name", name)
        localStorage.setItem("age", age)
    }

    return (
        <div style={{ margin: "10rem" }}>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Employees && Employees.length > 0
                            ? Employees.map((employee) => {
                                return (
                                    <tr>
                                        <td>{employee.name}</td>
                                        <td>{employee.age}</td>
                                        <td>
                                            <Link to={"/edit"}>
                                                <button className="btn btn-primary"
                                                    onClick={() => handleEdit(employee.id, employee.name, employee.age)}>Edit</button>
                                            </Link>
                                            <button className="btn btn-primary" onClick={() => handleDelete(employee.id)}>Delete</button>
                                        </td>

                                    </tr>
                                )
                            })
                            : "No Data Available"
                    }
                </tbody>
            </table>
            <br />
            <Link className="d-grid gap-2" to="/create-user">
                <button className="btn btn-primary" size="lg">Create</button>
            </Link>
        </div>
    )
}

export default Home;