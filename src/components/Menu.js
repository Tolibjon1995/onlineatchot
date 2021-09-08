import React, { useState, useEffect } from 'react';
import { AvInput, AvForm } from 'availity-reactstrap-validation'
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';
import axios from 'axios';
import '../sass/style.scss'
import Xisob from './Xisob';
import Chek from './Chek';

const Menu = () => {
    const [menu, setMenu] = useState([])
    const [xisob, setXisob] = useState([])
    const [test, settest] = useState(-1)
    const [d, setd] = useState(0)
    let a 
    let b = []
    let c = 0
    useEffect(() => {
        axios.get('https://60a359a57c6e8b0017e26bb4.mockapi.io/kom/menu')
            .then((res) => {
                setMenu(res.data)
            })
    }, [])
    
    
    
    const hisob = (nom, narx, index) => {
         a = {
            nomi: nom,
             narxi: narx,
             id:index
        }
        
        b = b.concat(a)
        setXisob(xisob.concat(b))
        
        
    }
    const delet = () => {
        setXisob(xisob.splice(xisob.test, 1))
        console.log(xisob)
        hisob()
    }
    const jamlanma = (i, j) => {
        c += parseFloat(i)
        settest(j)
        setd(c)
    }
    
    return (
        <div className='container'>
            <AvForm>

                <div className="row">
                    <div className="col-6">
                        <label htmlFor="id1" className='mt-3'>Stulni tanlang</label>
                        <AvInput type='select' id='id1' name='stol'>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                        </AvInput>

                        <label htmlFor="id2" className='mt-3'>Afitsantni tanlang</label>
                        <AvInput type='select' id='id2' name='xizmatchi'>
                            <option value='Tolibjon'>Tolibjon</option>
                            <option value='Donyor'>Donyor</option>
                            <option value='Zuhriddin'>Zuhriddin</option>
                            <option value='Sherzod'>Sherzod</option>
                            <option value='Arslon'>Arslon</option>
                        </AvInput>

                        <ListGroup className='mt-5 narx-menu'>
                            {
                                menu.map((item, index) => {
                                    return (
                                        <ListGroupItem className="d-flex justify-content-between narx" onClick={()=>{hisob(item.nomi,item.narxi,item.id)}}>
                                            {item.nomi} <Badge pill color="primary">{item.narxi} so'm</Badge>
                                        </ListGroupItem>
                                    )
                                })
                            }

                        </ListGroup>
                    </div>
                    <div className="col-6">
                        <Xisob jami={d}/>
                        <Chek hisob={xisob} funk={jamlanma} funk2={delet}/>
                    </div>
                </div>


            </AvForm>
        </div>
    );
};

export default Menu;