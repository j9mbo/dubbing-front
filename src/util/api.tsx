import axios from "axios";

export default axios.create({
  baseURL: `http://ec2-18-133-239-26.eu-west-2.compute.amazonaws.com:5000/`,
});
