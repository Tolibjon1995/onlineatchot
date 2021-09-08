import React from 'react';
import { AvForm, AvInput, } from 'availity-reactstrap-validation'
import axios from 'axios';


const addfood = (e, error, values) => {
    axios.post('https://60a359a57c6e8b0017e26bb4.mockapi.io/kom/menu', values)
        .then((res) => {
            e.target.nomi.value = '';
            e.target.narxi.value = '';
            console.log(res.data)
        })

}

const Admin = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-6">
                    <AvForm onSubmit={addfood}>
                        <AvInput className='mt-4' type='text' name='nomi' />
                        <AvInput className='mt-4' type='number' name='narxi' />
                        <button type='submit' className='btn btn-success mt-3'>Add</button>
                    </AvForm>
                </div>
            </div>
        </div>
    );
};

export default Admin;