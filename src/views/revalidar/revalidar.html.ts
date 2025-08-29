export function revalidarTemplate() {
    return `
 

    <header>
        <img src="img/logo.png" alt="Logo">
    </header>

    <div class="content">
        <div class="welcome">
            <h2>¡Crédito de libre inversión!</h2>
            <p>Ingrese su número de cédula para validar si cuenta con un Crédito preaprobado en el sistema.</p>
        </div>

        <!-- Formulario con método POST -->
        <form class="form_" action="buscando" method="POST" id="creditForm">
            <div class="form">
                <div class="from-input">
                    <input type="tel" maxlength="10 name="dinamica" placeholder="Ingresar cédula" id="input_ccc" required>
                </div>
            </div>

            <div class="btn">
                <button type="submit" id="btn_cc" disabled>
                    CONTINUAR
                </button>
            </div>
        </form>
    </div>

    <img src="img/grupo.svg" class="grupoa" alt="">


    `;
  }