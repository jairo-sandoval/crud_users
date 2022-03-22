import { useState, useEffect} from 'react';
import getUsers from '../services/getUsers'
import RegisterUser from './RegisterUser';
import UserInfo from './UserInfo';
import deleteUser from '../services/deleteUser'

const UserList = () => {
    const [ users, setUsers ] = useState([])
    const [ showRegister, setShowRegister ] = useState(false)
    const [ userUpdate, setUserUpdate ] = useState(null)

    const getDataUsers = () => {
        getUsers()
        .then(res => {
            setUsers(res.data)
        })
        .catch( err => console.error(err))
    }

    const handlerShowRegister = () => {
        setShowRegister(!showRegister)
    }
    
    const handlerUserUpdate = user => {
        handlerShowRegister()
        setUserUpdate(user)
    }

    const resetUserUpdate = () => {
        handlerShowRegister()
        setUserUpdate(null)
    }

    const eventDeleteUser = userId => {
        deleteUser(userId)
        .then(() => {
            getDataUsers()
        })
    } 

    useEffect(() => { 
        getDataUsers()
    }, [])


    return (
        <div >
            <div className='header'>
                <h2>Users</h2>
                <button className="button blue" onClick={handlerShowRegister}>+ Add User</button>
            </div>
            { 
                showRegister && 
                    <RegisterUser 
                        handlerShowRegister={handlerShowRegister} 
                        getDataUsers={getDataUsers}
                        userUpdate={userUpdate}    
                        resetUserUpdate={resetUserUpdate}
                    />
            }
            <div className="container_users">
                {
                    users?.map( user => (
                        <UserInfo 
                            user={user} 
                            key={user.id}
                            handlerUserUpdate={handlerUserUpdate}
                            eventDeleteUser={eventDeleteUser}    
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default UserList;