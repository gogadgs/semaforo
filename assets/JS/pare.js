import { limparLuzes } from '../JS/limparLuzes.js';

export const luzVermelha = ()=>{
    limparLuzes();
    document.querySelector(".vermelho").style.backgroundColor="red";
}