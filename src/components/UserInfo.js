import React from 'react';

const UserInfo = ({ user, handlerUserUpdate, eventDeleteUser }) => {
    return (
        <div className="card_user">
            <h2>{user.first_name} {user.last_name}</h2>

            <div>
                <h5>Email</h5>
                <p>{user.email}</p> 
            </div>
            <div>
                <h5>Birthday</h5>
                <p>{user.birthday}</p>
            </div>
            <button className="button red" onClick={() => eventDeleteUser(user.id)}> 
                <i className="fa-solid fa-trash-can"></i>
            </button>
            <button className="button green" onClick={() => handlerUserUpdate(user)}> 
                <i className="fa-solid fa-pencil"></i>
            </button>
        </div>
    );
};

export default UserInfo;