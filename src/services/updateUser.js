import axios from 'axios'
import API_URL from '../constants/constants'

function updateUser(user){
    return axios.put(`${API_URL}${user.id}/`, user)
}

export default updateUser