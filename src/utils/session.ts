
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export async function getSessionId(): Promise<string> {
  try {
    const res = await axios.get("https://api.ipify.org?format=json");
    const sessionId = res.data.ip;
   
    return String(sessionId); 
  } catch (error) {
    let sessionId = localStorage.getItem("sessionId");
    if (!sessionId) {
      sessionId = uuidv4();
      localStorage.setItem("sessionId", sessionId);
    }
    return String(sessionId);
  }
}

