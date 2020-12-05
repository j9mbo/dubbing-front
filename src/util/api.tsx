import axios from "axios";

export default axios.create({
  baseURL: `http://ec2-18-132-97-13.eu-west-2.compute.amazonaws.com:5000/api/`,
});
