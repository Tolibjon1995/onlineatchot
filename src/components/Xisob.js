import React from 'react';
import { AvInput, AvForm } from 'availity-reactstrap-validation'
const Xisob = (props) => {
    return (
        <div>
            <AvForm>
                <label htmlFor="id3" className='mt-3'>To'lov turi</label>
                <AvInput type='select' id='id3' name='stol'>
                    <option value='' disabled>Tanlang</option>
                    <option value='Naqt pul'>Naqt pul</option>
                    <option value='Plastik kartadan'>Plastik kartadan</option>
                </AvInput>
                <label htmlFor="id3" className='mt-3'>Umumiy summa</label>
                <AvInput type='text' value={props.jami/2 + ' '+'so`m'} name='jami' />
                <button type='submit' className="btn btn-success mt-2 mr-3">Hisoblash</button>
                <button className="btn btn-secondary mt-2">Chekni olish</button>
            </AvForm>
        </div>
    );
};

export default Xisob;