import React, { useState, useEffect } from 'react';
// import Header from '../../Header.js';
import { Link } from 'react-router-dom';
// import './Employeelist.css';
import { deleteEmployee, getAllEmployees } from '../../../APIs/EmployeeServices.js';
import { Modal, Button } from 'react-bootstrap';


function EmployeeList() {

    const [Employees, setEmployees] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedEmployeeno, setSelectedEmployeeno] = useState(null);

    useEffect(() => {
        //load data 
        loadEmployees();
    }, [])

    async function loadEmployees() {
        const result = await getAllEmployees();
        setEmployees(result);
    }
    const handleDelete = async (id) => {
        await deleteEmployee(id);
        loadEmployees();
        setShowModal(false);
    };

    const confirmDelete = (id) => {
        setSelectedEmployeeno(id);
        setShowModal(true);
    };
    return (
        <div className="product-list-container">
            <h2 className="my-4 text-center">Employee List</h2>
            <div className="d-flex justify-content-end mb-3">
                <Link to="/Employee/add" className="btn btn-primary">Add Employee</Link>
            </div>
            <table className="table table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Mobile No</th>
                        <th>Address</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {Employees && Employees.map((Employee) => (
                        <tr key={Employee.id}>
                            <td>{Employee.id}</td>
                            <td>{Employee.name}</td>
                            <td>{Employee.address}</td>
                            <td>{Employee.jobDes}</td>
                            
                            <td>
                                <Link to={`/employee/edit/${Employee.id}`} className="btn btn-sm btn-warning mr-2">Edit</Link>
                                <button onClick={() => confirmDelete(Employee.id)} className="btn btn-sm btn-danger">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Modal show={showModal} onHnoe={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this Employee?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={() => handleDelete(selectedEmployeeno)}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
export default EmployeeList;