import React,{useState} from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";

const AddUserForm = props => {
    const [userNameAv,setUserNameAv] = useState(null);
    const [userDate, setUserData] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        numOfGamesPlayed:0
    })

    ////////////////////
    const inputChangesHandler = (e) => {
        setUserData(prevState => {
            prevState[e.target.id] = e.target.value;
            return {
                
                    ...prevState
                    
                
            }
        })
    }
    ///////////////////////////
    const addUserHandler = (e) => {
        e.preventDefault();
        if (props.users.hasOwnProperty(userDate.userName)) {
            setUserNameAv('This user name is taken chose anthor user name');
        } else {
            setUserNameAv('User added successfully');
            props.addUserData(userDate);

            
            
        }
    }
    
    console.log('addUserform',props.users);

    return (
        <React.Fragment>
            <form onSubmit={addUserHandler}>
                <Input
                    id='firstName'
                    label={'First Name'}
                    type={'text'}
                    value={userDate.firstName}
                    onChange={inputChangesHandler}
                />
                <Input
                    id='lastName'
                    label={'Last Name'}
                    type={'text'}
                    value={userDate.lastName}
                    onChange={inputChangesHandler}

    
                />
                <Input
                    id='userName'
                    label={'User Name'}
                    type={'text'}
                    value={userDate.userName}
                    onChange={inputChangesHandler}

    
                />
                <Button
                    disabled={!(userDate.firstName && userDate.lastName && userDate.userName)}
                    onClick={addUserHandler}
                
                >   Add User
                </Button>
                <p>
                    {userNameAv ? userNameAv :null}
                </p>
            </form>
        
        </React.Fragment>
    );
    
    
}

export default AddUserForm;