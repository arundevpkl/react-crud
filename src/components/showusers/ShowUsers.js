import React, { useState } from 'react'
import Header from '../../common/header/Header'
import '../showusers/ShowUsers.css'
import AddUser from '../adduser/AddUser';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

function ShowUsers(props) {

    const { userList, addUserHandler, deleteUserHandler } = props;
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
            <div className='container-sm px-md-5 mt-5'>
                <div className="table-responsive">
                    <table className="table text-center">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userList.map((el) => {
                                    return <tr key={el.id}>
                                        <td> <h6> {el.name}</h6></td>
                                        <td> <h6> {el.email}</h6></td>
                                        <td> <h6> {el.phone}</h6></td>
                                        <td><div className='col-12'>
                                        <Link to={'/edit/' + el.id}> <Button variant="contained" size="small" color='warning' startIcon={<EditIcon fontSize='small' />} className='me-3'>Edit</Button></Link>
                                            <Button variant="contained" onClick={() => deleteUserHandler(el.id)} size="small" color="error" startIcon={<DeleteIcon fontSize='small' />}>Delete</Button>
                                        </div></td>
                                    </tr>
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ShowUsers