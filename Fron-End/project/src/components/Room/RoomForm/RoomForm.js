import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createRoom, getAllRoomsCategory, getRoomById, updateRoom } from '../../../APIs/RoomService';
import './RoomForm.css';

function RoomForm() {
    const [Room, setRoom] = useState(
        {
            no: 0,
            room_type: '',
            available: '',
            roomcategoryid: 1
            
        }
    );
    const [roomscategory , setRoomscategory] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();


    useEffect(() => {
        if (id) {
            loadRoom();
        }
    }, [id]);

useEffect(()=>{
    loadRoomsCategory();
}, [] )

const loadRoomsCategory = async () => {

    const pcList = await getAllRoomsCategory();
    setRoomscategory(pcList);
    console.log(pcList);
}

    const loadRoom = async () => {
        const result = await getRoomById(id);
        setRoom(result);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const temp = {...Room};
        console.log(temp, Room);
        console.log(name, value);

        setRoom({ ...Room, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (id) {
            Room.updateddate = new Date();
            await updateRoom(id, Room);
        }
        else {
            Room.createddate = new Date();
            Room.updateddate = new Date();

            await createRoom(Room);
        }
        navigate('/Rooms');

    }
    const handleCancel = () => {
        navigate('/Rooms');
    };
    return (
        <div className="product-form-container">
            <h2 className="my-4 text-center">{id ? 'Edit Room' : 'Add Room'}</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Room Type</label>
                    <input type="text" name="room_type" value={Room.room_type} onChange={handleChange} className="form-control" required />
                </div>
                <div className="form-group">
                    <label>Available</label>
                    <input type="text" name="available" value={Room.available} onChange={handleChange} className="form-control" required />
                </div>
                <div className="form-group">
                    <label>Category</label>
                    <select className="form-select" name="roomcategoryid" value={Room.roomcategoryid} onChange={handleChange}>
                        {roomscategory && roomscategory.map((pc) => (
                            <option key={pc.id} value={pc.id}>{pc.category}</option>
                        ))}
                    </select>
                </div>
                <div className="d-flex justify-content-between mt-2">
                    <button type="submit" className="btn btn-primary">{id ? 'Update' : 'Create'}</button>
                    <button type="button" onClick={handleCancel} className="btn btn-secondary">Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default RoomForm;