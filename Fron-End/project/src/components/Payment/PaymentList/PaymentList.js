import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { deletePayment, getAllPayments } from '../../../APIs/PaymentService';
import { Modal, Button } from 'react-bootstrap';


function PaymentList() {
    const [Payments, setPayments] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedPaymentId, setSelectedPaymentId] = useState(null);

    useEffect(() => {
        //load data 
        loadPayments();
    }, [])

    async function loadPayments() {
        const result = await getAllPayments();
        setPayments(result);
    }
    const handleDelete = async (id) => {
        await deletePayment(id);
        loadPayments();
        setShowModal(false);
    };

    const confirmDelete = (id) => {
        setSelectedPaymentId(id);
        setShowModal(true);
    };
    return (
        <div className="Payment-list-container">
            <h2 className="my-4 text-center">Payment List</h2>
            <div className="d-flex justify-content-end mb-3">
                <Link to="/Payments/add" className="btn btn-primary">Add Payment</Link>
            </div>
            <table className="table table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th>pay_no</th>
                        <th>pay_date</th>
                        <th>pay_method</th>
                        <th>pay_amount</th>
                    </tr>
                </thead>
                <tbody>
                    {Payments && Payments.map((Payment) => (
                        <tr key={Payment.pay_no}>
                            <td>{Payment.pay_no}</td>
                            <td>{Payment.pay_date}</td>
                            <td>{Payment.pay_method}</td>
                            <td>{Payment.pay_amount}</td>
                            <td>
                                <Link to={`/payments/edit/${Payment.pay_no}`} className="btn btn-sm btn-warning mr-2">Edit</Link>
                                <button onClick={() => confirmDelete(Payment.pay_no)} className="btn btn-sm btn-danger">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this Payment?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={() => handleDelete(selectedPaymentId)}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
export default PaymentList;