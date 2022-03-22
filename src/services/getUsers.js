import axios from 'axios'
import API_URL from '../constants/constants'

function getUsers(){
    return axios.get(API_URL).then(res => res)
}

export default getUsers