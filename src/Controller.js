import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import EditUser from './components/edituser/EditUser'
import ShowUsers from './components/showusers/ShowUsers'
import UserService from './common/UserService'

function Controller() {

    const [userList, setUserList] = useState([]);


    const loadData = () => {

        UserService.getAll()
            .then(response => {
                setUserList(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });

    }

    useEffect(() => {

        loadData()

    }, [])

    const addUserHandler = async (user) => {
        const response = await UserService.create(user);
        console.log(response);
        loadData()

    }
    const deleteUserHandler = async (user) => {
        const response = await UserService.remove(user);
        console.log(response);
        loadData()

    }
  

    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={<ShowUsers userList={userList} deleteUserHandler={deleteUserHandler} addUserHandler={addUserHandler} />} />
                    <Route path='/edit/:id' element={<EditUser  loadData={loadData} />} />
                </Routes>
            </Router>
        </div>
    )
}

export default Controller