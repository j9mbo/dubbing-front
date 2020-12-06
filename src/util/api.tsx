import axios from "axios";

export default axios.create({
  baseURL: `http://ec2-35-178-204-2.eu-west-2.compute.amazonaws.com:5000/`,
});
