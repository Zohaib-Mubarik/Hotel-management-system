import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createEmployee, getEmployeeById, updateEmployee } from '../../../APIs/EmployeeServices.js';
import './EmployeeForm.css';

function EmployeeForm() {
    const [Employee, setEmployee] = useState(
        {
            id: 0,
            name: '',
            address: '',
            jobDes:''
        }
    );

    const navigate = useNavigate();
    const { id } = useParams();


    useEffect(() => {
        if (id) {
            loadEmployee();
        }
    }, [id]);
    const loadEmployee = async () => {
        const result = await getEmployeeById(id);
        setEmployee(result);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const temp = {...Employee};
        console.log(temp, Employee);
        console.log(name, value);

        setEmployee({ ...Employee, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (id) {
            Employee.updateddate = new Date();
            await updateEmployee(id, Employee);
        }
        else {
            Employee.createddate = new Date();
            Employee.updateddate = new Date();

            await createEmployee(Employee);
        }
        navigate('/employee');

    }
    const handleCancel = () => {
        navigate('/employee');
    };
    return (
        <div className="product-form-container">
            <h2 className="my-4 text-center">{id ? 'Edit Employee' : 'Add Employee'}</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="name" value={Employee.name} onChange={handleChange} className="form-control" required />
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <input type="text" name="address" value={Employee.address} onChange={handleChange} className="form-control" required />
                </div>
                <div className="form-group">
                    <label>Job Des</label>
                    <input type="text" name="jobDes" value={Employee.jobDes} onChange={handleChange} className="form-control" required />
                </div>
                
                <div className="d-flex justify-content-between mt-2">
                    <button type="submit" className="btn btn-primary">{id ? 'Update' : 'Create'}</button>
                    <button type="button" onClick={handleCancel} className="btn btn-secondary">Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default EmployeeForm;