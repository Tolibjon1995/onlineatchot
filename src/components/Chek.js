import React, { useState } from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const Chek = (props) => {
    const [soni, setsoni] = useState(1)
    const [jami, setJami] = useState(0)
    let b = 0
    const qosh = () => {
        setsoni(soni + 1)
    }

    const ayir = () => {
        setsoni(soni - 1)
        if (soni === 1) {
            return setsoni(1)
        }
    }



    return (
        <div className='mt-3'>
            {
                props.hisob.length > 0 ?
                props.hisob.map((item, index) => {

                    return (
                        <div className="card border-0 mt-2">
                            <div className="card-body d-flex align-items-center justify-content-between">
                                <div>
                                    <h5>{item.nomi}</h5>
                                    <div className="d-flex align-items-center">
                                        <p className='mr-3 pap'>
                                            <span className='mx-3' onClick={ayir}>-</span>
                                            {soni}
                                            <span className='mx-3' onClick={qosh}>+</span></p>
                                        <p>{item.narxi * soni} so'm</p>
                                        {props.funk(item.narxi, item.index)}
                                    </div>
                                </div>
                                <div className="img">
                                    <DeleteForeverIcon color="primary" style={{ fontSize: 40 }} onClick={() => { props.funk2() }} />
                                </div>
                            </div>
                        </div>
                    )
                })
                    : props.hisob.length = ''
            }

        </div>
    );
};

export default Chek;