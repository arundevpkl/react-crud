import React, { useState } from "react";
import { Modal, ModalFooter } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../adduser/AddUser.css'
import { purple, grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';


function AddUser(props) {

    const { show, handleClose, size, modalTitle, addUserHandler } = props;
    const [user, setUser] = useState({ id: 0, name: '', phone: '', email: '' });
    const navigate = useNavigate();

    const inputHandlerChange = (e) => {
        const state = user;
        state[e.target.name] = e.target.value;
        setUser(state);
        console.log(state);
    }

    const onFormSubmitted = (e) => {
        const stateFrom = user;
        e.preventDefault();
        setUser({ ...stateFrom })
        addUserHandler(user);
        handleClose()
        navigate('/')
    }

    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: grey[700],
        '&:hover': {
            backgroundColor: grey[800],
        },
    }));

    return (
        <Modal onClose={handleClose} size={size} show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header >
                <Modal.Title>{modalTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='my-5'>
                    <div className=" add-contact-container">
                        <div className='add-form-container'>
                            <div className="add-user-form px-md-5" >
                                <div className="my-4">
                                    <TextField fullWidth label="Name" id="name" name="name" onChange={inputHandlerChange} />
                                </div>
                                <div className="my-4">
                                    <TextField fullWidth label="Email" type="email" id="email" name="email" onChange={inputHandlerChange} />
                                </div>
                                <div className="my-4">
                                    <TextField fullWidth label="Phone" id="phone" name="phone" onChange={inputHandlerChange} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <ModalFooter>
                <div className='form-btn-area'>
                    <div className="me-2">
                        <Button type="submit" onClick={onFormSubmitted} variant="contained" color="success" >Add</Button>
                    </div>
                    <div className="ms-2">
                        <ColorButton onClick={() => handleClose()} type="submit" variant="contained">Back</ColorButton>
                    </div>
                </div>
            </ModalFooter>
        </Modal>
    );
};

export default AddUser;