import React,{useState} from 'react';
import UserTable from './components/UserTable';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';
import {v4 as uuidv4} from 'uuid';

function App() {
  const usersData =[
    {id: uuidv4(), name : 'alejandro' , username : 'alejadro'},
    {id: uuidv4(), name : 'adolfo' , username : 'adolfo'},
    {id: uuidv4(), name : 'angela' , username : 'angela'},
  ]
  const [users, setusers] = useState(usersData)
  // agregar un usuario
  const addUser =(user)=>{
    // console.log(user)
    user.id = uuidv4()
    setusers([
      ...users , user
    ])
  }
  // eliminar un usuario
  const deletUser = (id)=>{
    //console.log(id);
    setusers(users.filter((user)=> user.id !== id ));
  }
  // editar usuario
  const [editing,setEditing] = useState(false);

  const [currentUser ,setCurrentUser] = useState({
    id : null , name : '' , username : ''
  });
  const editRow = (user) =>{
    setEditing(true);
    setCurrentUser({
      id: user.id , name : user.name , username : user.username
    })
  }

  const updateUser = (id , updateUser) =>{
    setEditing(false);
    setusers(users.map(user => (user.id === id ? updateUser : user )))
  }
  return (
    <div className = "container">
      <h1>CRUD APP with hooks</h1>
      <div className = 'flex-row'>
        <div className = "flex-large">
          {
            editing?(
              <div>
                <h2>Edit User</h2>
                <EditUserForm
                  currentUser = {currentUser}
                  updateUser = {updateUser}
                />
              </div>
            ):(
              <div>
                <h2>Add User</h2>
                <AddUserForm addUser = {addUser}/>
              </div>
            )
          }        
        </div>
        <div className = "flex-large">
          <h2>View users</h2>
          <UserTable 
            users = {users} 
            deletUser = {deletUser} 
            setEditing = {setEditing}
            editRow = {editRow}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
