import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID k-sLCb4ywsdMZZLW9UImhA8IfqlFq_LL40_iIsWuX24",
  },
});
