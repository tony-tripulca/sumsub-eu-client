import axios from "axios";
import URL from "../config/url.js";

const AccessTokenService = {
  getAccessToken: (payload) => {
    return axios({
      method: "GET",
      baseURL: URL.api(),
      url: `/access-token`,
      // headers: {},
    });
  },
};

export default AccessTokenService;
