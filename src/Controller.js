import React, {useState,useEffect} from 'react'
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


    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={<ShowUsers userList={userList}/>}/>
                    <Route path='/edit' element={<EditUser/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default Controller