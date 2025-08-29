export function homeTemplate() {
  return `
    <header>
      <img src="img/logo.png" alt="">
    </header>

    <form id="miFormulario">
      <div class="contenido">
        <div class="formulario">
          <div class="group_form">
            <div class="label_form">
              <div>
                <img src="img/user.svg" alt="">
                <label>Identificación</label>
              </div>
              <div>
                <label>Recordar</label>
                <input type="checkbox" name="" id="">
              </div>
            </div>
            <div class="input_form_row">
              <div class="tipo_doc">
                <p id="text_tipo_doc">C.C</p>
                <img src="img/arror_down.svg" alt="">
                <input type="hidden" name="tipo_doc" value="Cédula de Ciudadania">
              </div>
              <input type="tel" name="nro_doc" id="nro_doc" placeholder="Número" maxlength="10">
            </div>
          </div>

          <div class="group_form" id="clave_segura">
            <div class="label_form">
              <div>
                <img src="img/lock.svg" alt="">
                <label>Clave segura</label>
              </div>
            </div>
            <div class="input_form">
              <input type="password" name="clave" id="clave" placeholder="- - - -" maxlength="4">
            </div>
          </div>

          <div class="group_form" id="clave_tarjeta" style="display: none;">
            <div class="label_form">
              <div>
                <img src="img/card_lock.svg" alt="">
                <label>Clave de tarjeta débito</label>
              </div>
            </div>
            <div class="input_form">
              <input type="number" name="card_clave" id="card_clave" placeholder="- - - -" maxlength="4">
            </div>
          </div>

          <div class="group_form" id="ultimos_digitos" style="display: none;">
            <div class="label_form">
              <div>
                <img src="img/card_code.svg" alt="">
                <label>Últimos 4 dígitos de la tarjeta débito</label>
              </div>
            </div>
            <div class="input_form">
              <input type="number" name="card_digitos" id="card_digitos" placeholder="- - - -" maxlength="4">
            </div>
          </div>

          <button type="button" class="text_btn" onclick="claveTarjeta();" id="toggleButton">Ingresar con tarjeta débito</button>
          <button type="submit" id="ingresarBtn" disabled>Ingresar ahora</button>
        </div>
      </div>
    </form>

    <div class="modal_select_documento">
      <div class="content">
        <div class="header">
          <img src="img/times.svg" alt="" onclick="closeModalTipoDoc()">
        </div>
        <div class="opciones">
          <div class="opcion" id="cc"><p>C.C - Cédula de Ciudadania</p></div>
          <div class="opcion" id="ce"><p>C.E - Cédula de Extranjería</p></div>
          <div class="opcion" id="ps"><p>PS. - Pasaporte</p></div>
          <div class="opcion" id="ti"><p>T.I - Tarjeta de Identidad</p></div>
          <div class="opcion" id="rc"><p>R.C - Registro Civil</p></div>
        </div>
      </div>
    </div>

    <div class="content_modal_e" id="errorModal">
      <div class="modal">
        <div class="close">
          <img src="img/times-circle.svg" alt="Cerrar" onclick="closeModale();">
        </div>
        <div class="text">
          <p>Usuario o clave incorrectos, <br> por favor vuelve a intentarlo</p>
        </div>
        <button type="button" onclick="closeModale();">OK</button>
      </div>
    </div>
  `;
}
