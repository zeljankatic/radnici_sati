import axios from "axios";

export default class RadniSatiService {
  constructor() {
    this.baseUrl = "http://localhost:4000/radni_sati";
  }

  async create(body) {
    console.log(body);
    return await axios.post(this.baseUrl, body);
  }

  async getAll() {
    return await axios.get(this.baseUrl);
  }
}
