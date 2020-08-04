import io from "socket.io-client";

export const WEBSOCKETS_ENDPOINT = "http://localhost:3000";

export const connect = () => {
  const socket = io(WEBSOCKETS_ENDPOINT);
  return new Promise(resolve => {
    socket.on('connect', () => {
      resolve(socket);
      console.log("Connection established");
    })
  })
};
