import axios from "axios";

export default {
  getSubs: function() {
    return axios.get("/api/items/");
  },
  getyourSub: function(userName) {
    return axios.get("/api/items/" + userName);
  },
  deleteSubs: function(service) {
    return axios.delete("/api/items/" + service);
  },
  saveSubs: function(subsData) {
    return axios.post("/api/items/", subsData);
  }
}