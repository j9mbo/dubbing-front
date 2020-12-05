import axios from "axios";

export default axios.create({
  baseURL: `http://ec2-18-130-235-217.eu-west-2.compute.amazonaws.com:5000/api/`,
});
