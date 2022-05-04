import React,{useState,useEffect} from 'react'
import Header from '../../common/header/Header'
import '../showusers/ShowUsers.css'
import UserService from '../../common/UserService';
function ShowUsers() {
    const [userList, setUserList] =useState([]);
    
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
            <Header heading="CRUD USER"/>
            <div className='container-sm mt-5'>
                <div className='row'>
                    <div className=' text-center d-flex'>
                        <div className='col-3'> <h5>Name</h5> </div>
                        <div className='col-3'><h5>Email</h5></div>
                        <div className='col-3'><h5>Phone</h5></div>
                    </div>
                </div>
                {
                    userList.map((el)=>{
                        return  <div key={el.id} className='row mt-4 '>
                        <div className=' d-flex text-center shadow-sm rounded p-3 '>
                            <div className='col-3 center'> <h6> {el.name}</h6></div>
                            <div className='col-3 center'> <h6> {el.email}</h6></div>
                            <div className='col-3 center'> <h6>{el.phone}</h6></div>
                            <div className='col-3'>
                                <button className='btn btn-warning'>Edit</button>
                                <button className='btn btn-danger ms-3'>Delete</button>
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