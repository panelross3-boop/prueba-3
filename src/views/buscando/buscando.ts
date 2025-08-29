import { buscandoTemplate } from "./buscando.html";

export const renderBuscando = async () => {

 
  const app = document.querySelector<HTMLDivElement>('#app');
  
  
  if (app) {
    app.innerHTML =buscandoTemplate();
    
  }

function redirectToPage(url:string) {
		setTimeout(function() {
			window.location.href = url;
		}, 4000); 
	}


	redirectToPage('info');


   
}


