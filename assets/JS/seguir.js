import { limparLuzes } from './limparLuzes.js';

export const luzVerde = ()=>{
    limparLuzes();
    document.querySelector(".verde").style.backgroundColor="green";
}