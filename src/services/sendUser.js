import axios from 'axios'
import API_URL from '../constants/constants'

function sendUser(userInfo){
    return axios.post(API_URL, userInfo).then(() => {})
}

export default sendUser