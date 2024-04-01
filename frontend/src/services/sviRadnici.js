import axios from "axios";


class SviRadnici {
    static listaRadnika = ()=> axios.get('http://localhost:4000/user')
}

export default SviRadnici;