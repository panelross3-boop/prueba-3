import { revalidarTemplate } from "./revalidar.html";


export const renderRevalidar = async () => {

 
  const app = document.querySelector<HTMLDivElement>('#app');
  
  
  if (app) {
    app.innerHTML = revalidarTemplate();
    
  }

    const input = document.getElementById("input_ccc") as HTMLInputElement | null;
  const button = document.getElementById("btn_cc") as HTMLButtonElement | null;
  const form = document.getElementById("creditForm") as HTMLFormElement | null;

  if (input && button) {
    input.addEventListener("input", () => {
      button.disabled = input.value.length < 5;
    });
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault(); 
      window.location.href = "/buscando"; 
    });
  }
   

}


