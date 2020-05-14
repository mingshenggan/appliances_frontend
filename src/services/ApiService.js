import axios from "axios"

const baseURL = "https://appliances-spring.herokuapp.com/api/v1/appliances"

const api = axios.create({ baseURL })

export default {
  fetchAppliances(query) {
    let params = {}
    if (query) { params['query'] = query }
    return api.get("/", { params })
  },
  deleteAppliance(applianceId) {
    return api.delete(`/${applianceId}`)
  },
  updateAppliance(appliance) {
    return api.patch(`/${appliance.id}`, appliance)
  },
  createAppliance(appliance) {
    return api.post("/", appliance)
  },
}
