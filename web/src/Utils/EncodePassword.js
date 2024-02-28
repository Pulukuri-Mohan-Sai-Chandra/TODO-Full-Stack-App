import encrpt from 'crypto-js'




export const encodePass = (password) =>{
    const encpass = encrpt.AES.encrypt(password,import.meta.env.VITE_PASSHASH)
    console.log(encpass);
    return encpass.toString();
}