import axios from "axios";

export default class RadniSatiService {
    static prenosBazaSati = (body)=> axios.post('http://localhost:4000/radni_sati', body)
    static getAll = () => axios.get("http://localhost:4000/radni_sati");
}