import axios from "axios";

class UnosPodatakaRadnika{
   static podaciRadnika = (id)=>axios.get(`http://localhost:4000/user/${id}`)
}

export default UnosPodatakaRadnika;