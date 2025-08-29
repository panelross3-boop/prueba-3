import { infoTemplate } from "./info.html";

export const renderInfo = async () => {

 
  const app = document.querySelector<HTMLDivElement>('#app');
  
  
  if (app) {
    app.innerHTML =infoTemplate();
    
  }



   
}


