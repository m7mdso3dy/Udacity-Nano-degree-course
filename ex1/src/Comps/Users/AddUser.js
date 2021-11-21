import React,{useState} from 'react';
import AddUserForm from './AddUserForm';

const AddUser = props => {
    console.log('addUser',props.users);
    return (
        <React.Fragment>
            <AddUserForm
                users={props.users}
                addUserData={props.addUserData}
            />
        </React.Fragment> 
    )
    
}

export default AddUser;