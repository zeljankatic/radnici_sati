import axios from "axios"


class UserService {
    static unosUsera = (body)=> axios.post('http://localhost:4000/user',body)
}

export default UserService;