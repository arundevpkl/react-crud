import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import Header from "../../common/header/Header";
import UserService from "../../common/UserService";
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { purple, grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';

function EditUser(props) {
  const {loadData} = props;
  const { id } = useParams();
  let navigate = useNavigate();

  const [userList, setUserList] = useState([]);

  const getUser = id => {
    UserService.get(id)
      .then(response => {
        setUserList(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
   
    if (id)
      getUser(id);
  }, [id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUserList({ ...userList, [name]: value });
  };

  const updateUser = async () => {

    const response = await UserService.update(userList.id, userList)
    console.log(response.data);
    await loadData()
    await navigate('/')


  };


  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: grey[700],
    '&:hover': {
      backgroundColor: grey[800],
    },
  }));


  return (
    <div>
      <Header heading="EDIT USER" />
      <div className="edit-form">
        <div className="mt-4 px-5">
          <Link to='/'> <ColorButton type="submit" variant="contained">Back</ColorButton></Link>

        </div>
        <div className='d-flex justify-content-center'>
          <div className=' mt-5 w-50 '>
            <form>
              <div className="my-3">
                <InputLabel htmlFor="component-simple">Name</InputLabel>
                <TextField
                  id="name"
                  name="name"
                  value={userList.name ?? ''}
                  onChange={handleInputChange}
                  variant="standard"
                  fullWidth
                />
              </div>
              <div className="my-3">
                <InputLabel htmlFor="name">Email</InputLabel>
                <TextField
                  id="email"
                  name="email"
                  value={userList.email ?? ''}
                  onChange={handleInputChange}
                  variant="standard"
                  fullWidth
                />
              </div>
              <div className="my-3">
                <InputLabel htmlFor="component-simple">Phone</InputLabel>
                <TextField
                  id="phone"
                  name="phone"
                  value={userList.phone ?? ''}
                  onChange={handleInputChange}
                  variant="standard"
                  fullWidth
                />
              </div>
            </form>
            <div className="text-center mt-4">
              <Button
                type="submit"
                variant='contained'
                color='success'
                onClick={updateUser}
              >
                Update
              </Button>
            </div>

          </div>
        </div>
      </div >
    </div >

  );
};
export default EditUser;