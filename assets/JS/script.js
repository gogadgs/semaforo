
import { luzAmarela } from '../JS/atencao.js';
import { limparLuzes } from '../JS/limparLuzes.js';
import { luzVermelha } from '../JS/pare.js';
import { luzVerde } from '../JS/seguir.js';


/* seletando campos html e inserindo funções dos modulos procedurais */

const vermelho =document.querySelector('.Pare');
const amarelo = document.querySelector(".Atenção");
const verde = document.querySelector(".Seguir");

vermelho.onclick = true? luzVermelha: limparLuzes();
amarelo.onclick = true?luzAmarela:limparLuzes();
verde.onclick = true?luzVerde:limparLuzes();