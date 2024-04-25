import axios from "axios";

export default class RadniciService {
    static getAll = async () => axios.get("http://localhost:4000/radnici");

    static getOne = async (id) => axios.get(`http://localhost:4000/radnici/${id}`);

    async create(radnik) {
        return await axios.post(this.url, radnik);
    }

    async update(id, radnik) {
        return await axios.put(`${this.url}/${id}`, radnik);
    }

    async delete(id) {
        return await axios.delete(`${this.url}/${id}`);
    }
}