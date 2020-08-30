import axios from "axios";

const KEY = "AIzaSyC6yphgB1k6vdqwEm8E984eI_1k6B7C4WM";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: "10",
    key: KEY,
  },
  headers: {
    Authorization: "Client-ID AIzaSyC6yphgB1k6vdqwEm8E984eI_1k6B7C4WM",
  },
});
