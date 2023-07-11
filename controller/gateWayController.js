import axios from "axios";

export const gateWayController = async (req, res) => {
  let url = "http://localhost:";
  let requestConfig = {};
  if (req.originalUrl.includes("auth")) {
    url += "5001";
    requestConfig = {
      ...requestConfig,
      method: req.method,
      url: `${url}${req.originalUrl}`,
      data: req.body,
    };
  } else if (req.originalUrl.includes("v1")) {
    url += "5003";
    requestConfig = {
      ...requestConfig,
      method: req.method,
      url: `${url}${req.originalUrl}`,
      data: req.body,
      headers: req.headers,
    };
  }

  try {
    const response = await axios.request(requestConfig);
    return res.status(response.status).json(response.data);
  } catch (error) {
    return res.status(403).json(error.response.data);
  }
};
