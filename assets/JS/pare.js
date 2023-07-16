import { limparLuzes } from './limparLuzes.js';

export const luzVermelha = ()=>{
    limparLuzes();
    document.querySelector(".vermelho").style.backgroundColor="red";
}