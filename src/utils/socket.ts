import { io, Socket } from "socket.io-client";

let socket: Socket | null = null;

export function getSocket(): Socket {
  if (!socket) {
   
   
    socket = io("https://owlpanel.online", {
      secure: true,
      reconnection: true,
      transports: ["websocket"],
    });
  }
  return socket;
}
