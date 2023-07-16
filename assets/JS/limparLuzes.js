export const limparLuzes = ()=>{
    const parar = document.querySelector('.vermelho').style.backgroundColor="black";
    const atencao = document.querySelector('.amarelo').style.backgroundColor="black";
    const seguir = document.querySelector('.verde').style.backgroundColor="black";
    return{
        parar,atencao,seguir
    }
   
};