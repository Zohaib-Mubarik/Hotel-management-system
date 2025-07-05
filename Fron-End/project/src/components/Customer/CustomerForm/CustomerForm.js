import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createCustomer, getCustomerById, updateCustomer } from '../../../APIs/CustomerService.js';
// import './CustomerForm.css';

function CustomerForm() {
    const [Customer, setCustomer] = useState(
        {
            id: 0,
            name: '',
            m_no: '',
            address: '',
            age:''
        }
    );

    const navigate = useNavigate();
    const { id } = useParams();


    useEffect(() => {
        if (id) {
            loadCustomer();
        }
    }, [id]);
    const loadCustomer = async () => {
        const result = await getCustomerById(id);
        setCustomer(result);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const temp = {...Customer};
        console.log(temp, Customer);
        console.log(name, value);

        setCustomer({ ...Customer, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (id) {
            Customer.updateddate = new Date();
            await updateCustomer(id, Customer);
        }
        else {
            Customer.createddate = new Date();
            Customer.updateddate = new Date();

            await createCustomer(Customer);
        }
        navigate('/customer');

    }
    const handleCancel = () => {
        navigate('/customer');
    };
    return (
        <div className="product-form-container">
            <h2 className="my-4 text-center">{id ? 'Edit Customer' : 'Add Customer'}</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="name" value={Customer.name} onChange={handleChange} className="form-control" required />
                </div>
                <div className="form-group">
                    <label>Mobile No</label>
                    <input type="number" name="m_no" value={Customer.m_no} onChange={handleChange} className="form-control" required />
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <input type="text" name="address" value={Customer.address} onChange={handleChange} className="form-control" required />
                </div>
                <div className="form-group">
                    <label>Age</label>
                    <input type="number" name="age" value={Customer.age} onChange={handleChange} className="form-control" required />
                </div>
                <div className="d-flex justify-content-between mt-2">
                    <button type="submit" className="btn btn-primary">{id ? 'Update' : 'Create'}</button>
                    <button type="button" onClick={handleCancel} className="btn btn-secondary">Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default CustomerForm;