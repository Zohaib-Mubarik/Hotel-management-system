import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { deleteRoom, getAllRooms } from '../../../APIs/RoomService';
import { Modal, Button } from 'react-bootstrap';


function RoomList() {

    const [Rooms, setRooms] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedRoomno, setSelectedRoomno] = useState(null);

    useEffect(() => {
        //load data 
        loadRooms();
    }, [])

    async function loadRooms() {
        const result = await getAllRooms();
        setRooms(result);
    }
    const handleDelete = async (id) => {
        await deleteRoom(id);
        loadRooms();
        setShowModal(false);
    };

    const confirmDelete = (id) => {
        setSelectedRoomno(id);
        setShowModal(true);
    };
    return (
        <div className="Room-list-container">
            <h2 className="my-4 text-center">Room List</h2>
            <div className="d-flex justify-content-end mb-3">
                <Link to="/Rooms/add" className="btn btn-primary">Add Room</Link>
            </div>
            <table className="table table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th>no</th>
                        <th>room_type</th>
                        <th>available</th>
                        <th>category</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Rooms && Rooms.map((Room) => (
                        <tr key={Room.no}>
                            <td>{Room.no}</td>
                            <td>{Room.room_type}</td>
                            <td>{Room.available}</td>
                            <td>{Room.categoryname}</td>

                            <td>
                                <Link to={`/rooms/edit/${Room.no}`} classroom_type="btn btn-sm btn-warning mr-2">Edit</Link>
                                <button onClick={() => confirmDelete(Room.no)} className="btn btn-sm btn-danger">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Modal show={showModal} onHnoe={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this Room?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={() => handleDelete(selectedRoomno)}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
export default RoomList;