import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import EditUser from './components/edituser/EditUser'
import ShowUsers from './components/showusers/ShowUsers'

function Controller() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={<ShowUsers/>}/>
                    <Route path='/edit' element={<EditUser/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default Controller