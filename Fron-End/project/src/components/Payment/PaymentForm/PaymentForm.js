import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createPayment, getPaymentById, updatePayment } from '../../../APIs/PaymentService';
import './PaymentForm.css';

function PaymentForm() {
    const [Payment, setPayment] = useState(
        {
            pay_no: 0,
            pay_date: '',
            pay_method: '',
            pay_amount:''
            
        }
    );

    const navigate = useNavigate();
    const { id } = useParams();


    useEffect(() => {
        if (id) {
            loadPayment();
        }
    }, [id]);
    const loadPayment = async () => {
        const result = await getPaymentById(id);
        setPayment(result);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const temp = {...Payment};
        console.log(temp, Payment);
        console.log(name, value);

        setPayment({ ...Payment, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (id) {
            Payment.updateddate = new Date();
            await updatePayment(id, Payment);
        }
        else {
            Payment.createddate = new Date();
            Payment.updateddate = new Date();

            await createPayment(Payment);
        }
        navigate('/Payment');

    }
    const handleCancel = () => {
        navigate('/Payment');
    };
    return (
        <div className="product-form-container">
            <h2 className="my-4 text-center">{id ? 'Edit Payment' : 'Add Payment'}</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Payment Date</label>
                    <input type="date" name="pay_date" value={Payment.pay_date} onChange={handleChange} className="form-control" required />
                </div>
                <div className="form-group">
                    <label>pay_method</label>
                    <input type="text" name="pay_method" value={Payment.pay_method} onChange={handleChange} className="form-control" required />
                </div>
                <div className="form-group">
                    <label>pay_amount</label>
                    <input type="number" name="pay_amount" value={Payment.pay_amount} onChange={handleChange} className="form-control" required />
                </div>
                <div className="d-flex justify-content-between mt-2">
                    <button type="submit" className="btn btn-primary">{id ? 'Update' : 'Create'}</button>
                    <button type="button" onClick={handleCancel} className="btn btn-secondary">Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default PaymentForm;