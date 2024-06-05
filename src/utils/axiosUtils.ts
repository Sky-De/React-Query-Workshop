import axios from "axios";

const client = axios.create({ baseURL: "http://localhost:1313" });

export const request = ({ ...options }) => {
  // client.defaults.headers.common.Authorization = `Bearer token`;
  // client.defaults.withCredentials = false;
  const onSuccess = (response) => response;
  const onError = (error) => {
    // optionally catch errors and add additional loggin here
    return error;
  };

  return client(options).then(onSuccess).catch(onError);
};
