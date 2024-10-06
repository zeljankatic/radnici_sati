import axios from "axios";

class LoginService{
   static logiranjeUsera = (body)=> axios.post('http://localhost:4000/auth/login',body)
}

export default LoginService;