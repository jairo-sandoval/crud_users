import axios from 'axios'
import API_URL from '../constants/constants'

async function deleteUser(userId){
    return await axios.delete(`${API_URL}${userId}/`)
} 

export default deleteUser