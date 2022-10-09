import axios from "axios";

// const basePath = '/api/messages'
const basePath =
  process.env.NODE_ENV === "build"
    ? "/api/messages"
    : "http://localhost:3001/api/messages";

export const getMessages = async () => {
  const response = await axios.get(basePath);
  return response.data;
};

export const postMessage = async (message) => {
  const response = await axios.post(basePath, { message });
  return response.data;
};

export const deleteMessage = async (message) => {
  const response = await axios.delete(`${basePath}/${message.id}`);
  return response.data;
};
