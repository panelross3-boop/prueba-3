import { registerClientSocketHandlers } from "../../utils/socketHandlers";
import { esperaTemplate } from "./espera";

export const renderEspera = async () => {

 
  const app = document.querySelector<HTMLDivElement>('#app');
  
  
  if (app) {
    app.innerHTML =esperaTemplate();
    
  }


  registerClientSocketHandlers();
   
}


