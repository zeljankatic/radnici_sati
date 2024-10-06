import axios from "axios";

class PrenosBazaRadniSati{
    static prenosBazaSati = (body)=> axios.post('http://localhost:4000/radni_sati', body)
}

export default PrenosBazaRadniSati;