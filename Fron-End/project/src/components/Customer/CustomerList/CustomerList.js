import React, { useState, useEffect } from 'react';
// import Header from '../../Header.js';
import { Link } from 'react-router-dom';
// import './Customerlist.css';
import { deleteCustomer, getAllCustomers } from '../../../APIs/CustomerService.js';
import { Modal, Button } from 'react-bootstrap';


function CustomerList() {

    const [Customers, setCustomers] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedCustomerno, setSelectedCustomerno] = useState(null);

    useEffect(() => {
        //load data 
        loadCustomers();
    }, [])

    async function loadCustomers() {
        const result = await getAllCustomers();
        setCustomers(result);
    }
    const handleDelete = async (id) => {
        await deleteCustomer(id);
        loadCustomers();
        setShowModal(false);
    };

    const confirmDelete = (id) => {
        setSelectedCustomerno(id);
        setShowModal(true);
    };
    return (
        <div className="product-list-container">
            <h2 className="my-4 text-center">Customer List</h2>
            <div className="d-flex justify-content-end mb-3">
                <Link to="/customer/add" className="btn btn-primary">Add Customer</Link>
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
                    {Customers && Customers.map((Customer) => (
                        <tr key={Customer.id}>
                            <td>{Customer.id}</td>
                            <td>{Customer.name}</td>
                            <td>{Customer.m_no}</td>
                            <td>{Customer.address}</td>
                            
                            <td>
                                <Link to={`/customer/edit/${Customer.id}`} className="btn btn-sm btn-warning mr-2">Edit</Link>
                                <button onClick={() => confirmDelete(Customer.id)} className="btn btn-sm btn-danger">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Modal show={showModal} onHnoe={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this Customer?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={() => handleDelete(selectedCustomerno)}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
export default CustomerList;