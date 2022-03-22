import { useEffect } from 'react';
import { useForm } from 'react-hook-form'
import sendUser from '../services/sendUser'
import updateUser from '../services/updateUser' 

const RegisterUser = ({ handlerShowRegister, getDataUsers, userUpdate, resetUserUpdate }) => {
    const { register, handleSubmit, reset } = useForm()

    useEffect(() => {
        if(userUpdate){
            reset({
                id: userUpdate.id,
                last_name: userUpdate.last_name,
                first_name: userUpdate.first_name,
				email: userUpdate.email,
				password: userUpdate.password,
                birthday: userUpdate.birthday
		    })
        }
    }, [userUpdate])

    const submit = data => {
        if(userUpdate){
            updateUser(data).then(() => {
                getDataUsers()
            })
            resetUserUpdate()
        } else {
            sendUser(data)
            .then(() => {
                getDataUsers()
                handlerShowRegister()
            })
            .catch((err) => {
                console.log(err)
                //setErrorRequest(!errorRequest)
            })
        }
        }
    const cancel = () => {
        handlerShowRegister()    
        resetUserUpdate()
    }
    
    return (    
        <div className="modal_register">
            <form onSubmit={handleSubmit(submit)}>
                <div>
                    <label htmlFor='name'>Name: </label>
                    <input 
                        type='text' 
                        id='name' 
                        {...register("first_name")} 
                    />
				</div>

                <div>
                    <label htmlFor='last_name'>Last name: </label>
                    <input 
                        type='text' 
                        id='last_name' 
                        {...register("last_name")} 
                    />
				</div>
                
				<div>
						<label htmlFor='email'>Email</label>
						<input 
                            type='email' 
                            id='email' 
                            {...register("email")} 
                        />
				</div>
				<div>
						<label htmlFor='password-input'>Password</label>
						<input 
                            type='password' 
                            id='password-input' 
                            {...register("password")} 
                            />
				</div>
				<div>
						<label htmlFor='date'>Date of birth</label>
						<input 
                            type='date' 
                            id='date' 
                            {...register("birthday")} 
                            />
				</div>
                <button  className="button red" type="button" onClick={cancel}>Cancel</button>
                <button className="button blue" >{ userUpdate ? 'Update' : 'Register'}</button>
                
		    </form>
            
        </div>
    );
};

export default RegisterUser;