import axios from "axios";

export default class RadniciService {
  constructor() {
    this.baseUrl = "http://localhost:4000/radnici";
  }

  async getAll() {
    return await axios.get(this.baseUrl);
  }

  async getOne(id) {
    return await axios.get(`${this.baseUrl}/${id}`);
  }

  async create(radnik) {
    return await axios.post(this.baseUrl, radnik);
  }

  async update(id, radnik) {
    return await axios.put(`${this.baseUrl}/${id}`, radnik);
  }

  async delete(id) {
    return await axios.delete(`${this.baseUrl}/${id}`);
  }
}
