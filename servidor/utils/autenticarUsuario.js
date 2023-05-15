import {scryptSync, timingSafeEqual, } from "crypto";

function autenticarUsuario(senhaDigitada, usuario) {
    const hasTeste = scryptSync(senhaDigitada, usuario.salSenha, 64);

    const hasReal = Buffer.from(usuario.hasSenha, "hex");

    const autenticado = timingSafeEqual(hasTeste, hasReal);

    return autenticado;
}


export default autenticarUsuario;