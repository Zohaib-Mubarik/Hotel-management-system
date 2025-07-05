import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createHotel, getHotelById, updateHotel } from '../../../APIs/HotelService';
import './HotelForm.css';

function HotelForm() {
    const [Hotel, setHotel] = useState(
        {
            id: 0,
            location: '',
            name: ''
        }
    );

    const navigate = useNavigate();
    const { id } = useParams();


    useEffect(() => {
        if (id) {
            loadHotel();
        }
    }, [id]);
    const loadHotel = async () => {
        const result = await getHotelById(id);
        setHotel(result);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const temp = {...Hotel};
        console.log(temp, Hotel);
        console.log(name, value);

        setHotel({ ...Hotel, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (id) {
            Hotel.updateddate = new Date();
            await updateHotel(id, Hotel);
        }
        else {
            Hotel.createddate = new Date();
            Hotel.updateddate = new Date();

            await createHotel(Hotel);
        }
        navigate('/Hotel');

    }
    const handleCancel = () => {
        navigate('/Hotel');
    };
    return (
        <div className="product-form-container">
            <h2 className="my-4 text-center">{id ? 'Edit Hotel' : 'Add Hotel'}</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Location</label>
                    <input type="text" name="location" value={Hotel.location} onChange={handleChange} className="form-control" required />
                </div>
                <div className="form-group">
                    <label>name</label>
                    <input type="text" name="name" value={Hotel.name} onChange={handleChange} className="form-control" required />
                </div>
                
                
                <div className="d-flex justify-content-between mt-2">
                    <button type="submit" className="btn btn-primary">{id ? 'Update' : 'Create'}</button>
                    <button type="button" onClick={handleCancel} className="btn btn-secondary">Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default HotelForm;