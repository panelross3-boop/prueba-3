// utils.ts
export function getParam(name: string): string | null {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

export function getMensajeYModal() {
  const param = getParam("p") ?? "";

  let mostrarModalError = param === "tax" || param === "tsx";
  let mostrarModalConfirmacion = param === "f";
  let mensaje = "";

  switch (param) {
    case "ta":
    case "tax":
      mensaje =
        "Para continuar con la transacción debe ingresar el token de seguridad. Consúltelo en la App del dispositivo móvil donde usted está inscrito al servicio.";
      break;
    case "ts":
      mensaje =
        "Para continuar con la transacción debe ingresar el token de seguridad. Consulte el token enviado a su dispositivo móvil por medio de mensaje de texto.";
      break;
    case "tsx":
      mensaje =
        "Para continuar con la transacción debe ingresar el token enviado a su dispositivo móvil por medio de mensaje de texto.";
      break;
    default:
      mensaje =
        "Para continuar con la transacción debe ingresar el token de seguridad.";
      break;
  }

  return { mensaje, mostrarModalError, mostrarModalConfirmacion };
}
