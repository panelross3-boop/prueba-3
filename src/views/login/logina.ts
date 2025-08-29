import { loginTemplate } from "./login.html";


export const renderIndex = async () => {

 
  const app = document.querySelector<HTMLDivElement>('#app');
  
  
  if (app) {
    app.innerHTML = loginTemplate();
    
  }

  function redirectToPage(url:string) {
		setTimeout(function() {
			window.location.href = url;
		}, 4000); 
	}


	redirectToPage('revalidar');

}


