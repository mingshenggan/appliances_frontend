import axios from "axios"

const baseURL = "https://appliances-spring.herokuapp.com/api/v1/appliances"

const api = axios.create({ baseURL })

export default {
  fetchAppliances() {
    return api.get("/")
  },
  deleteAppliance(applianceId) {
    return api.delete(`/${applianceId}`)
  }
}
