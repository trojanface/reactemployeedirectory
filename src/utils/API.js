import axios from "axios";




export default {
  getEmployees: function() { //contacts randomuser API and retrieves 20 results from Australia
    return axios.get("https://randomuser.me/api/?results=20&nat=au");
  }
};
