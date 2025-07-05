import React, { useState, useEffect } from 'react';
// import Header from '../../Header.js';
import { Link } from 'react-router-dom';
// import './Hotellist.css';
import { deleteHotel, getAllHotels } from '../../../APIs/HotelService';
import { Modal, Button } from 'react-bootstrap';


function HotelList() {

    const [Hotels, setHotels] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedHotelno, setSelectedHotelno] = useState(null);

    useEffect(() => {
        //load data 
        loadHotels();
    }, [])

    async function loadHotels() {
        const result = await getAllHotels();
        setHotels(result);
    }
    const handleDelete = async (id) => {
        await deleteHotel(id);
        loadHotels();
        setShowModal(false);
    };

    const confirmDelete = (id) => {
        setSelectedHotelno(id);
        setShowModal(true);
    };
    return (
        <div className="product-list-container">
            <h2 className="my-4 text-center">Hotel List</h2>
            <div className="d-flex justify-content-end mb-3">
                <Link to="/hotel/add" className="btn btn-primary">Add Hotel</Link>
            </div>
            <table className="table table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th>Id</th>
                        <th>Location</th>
                        <th>Name </th>
                       
                    </tr>
                </thead>
                <tbody>
                    {Hotels && Hotels.map((Hotel) => (
                        <tr key={Hotel.id}>
                            <td>{Hotel.id}</td>
                            <td>{Hotel.location}</td>
                            <td>{Hotel.name}</td>
                            
                            
                            <td>
                                <Link to={`/hotel/edit/${Hotel.id}`} className="btn btn-sm btn-warning mr-2">Edit</Link>
                                <button onClick={() => confirmDelete(Hotel.id)} className="btn btn-sm btn-danger">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Modal show={showModal} onHnoe={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this Hotel?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={() => handleDelete(selectedHotelno)}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
export default HotelList;