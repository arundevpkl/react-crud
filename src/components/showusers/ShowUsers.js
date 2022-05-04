import React, { useState } from 'react'
import Header from '../../common/header/Header'
import '../showusers/ShowUsers.css'
import AddUser from '../adduser/AddUser';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function ShowUsers(props) {

    const { userList, addUserHandler } = props;
    const [show, setShow] = useState(false);

    return (
        <div>
            <Header heading="CRUD USER" />
            <div className='mt-4 px-5'>
                <Button variant="contained" color="success" onClick={() => setShow(true)}>Add User</Button>
            </div>
            <AddUser
                show={show}
                handleClose={() => setShow(false)}
                handleShow={() => setShow(true)}
                modalTitle="ADD USER"
                addUserHandler={addUserHandler}
            >
            </AddUser>
            <div className='container-sm mt-5'>
                <div className='row'>
                    <div className=' text-center d-flex'>
                        <div className='col-3'> <h5>Name</h5> </div>
                        <div className='col-3'><h5>Email</h5></div>
                        <div className='col-3'><h5>Phone</h5></div>
                    </div>
                </div>
                {
                    userList.map((el) => {
                        return <div key={el.id} className='row mt-4 '>
                            <div className=' d-flex text-center shadow-sm rounded p-3 '>
                                <div className='col-3 center'> <h6> {el.name}</h6></div>
                                <div className='col-3 center'> <h6> {el.email}</h6></div>
                                <div className='col-3 center'> <h6>{el.phone}</h6></div>
                                <div className='col-3'>
                                    <Button variant="contained" size="small" color='warning'startIcon={<EditIcon fontSize='small' />} className='me-3'>Edit</Button>
                                    <Button variant="contained" size="small" color="error" startIcon={<DeleteIcon fontSize='small' />}>Delete</Button>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default ShowUsers