let Botao = document.querySelector("#Botao");
Botao.style.color="white";
let Exibindo=false;
let Cliques=0;
let TextoOR= document.querySelector("#TextoBoasVindas");
const Texto = "A vida é feita de desafios. Você decide se vai desistir ou enfrenta-los!"

Botao.addEventListener("mouseover",e =>{
    Botao.style.background="green";
})
Botao.addEventListener("mouseout", e=>{
    Botao.style.background="rgb(83, 168, 108)";
})
Botao.addEventListener("click",e=>{Cliques++;
    if(Cliques % 2 != 0){
        Botao.style.background="rgb(100, 200, 120)";
        TextoOR.textContent= Texto;
        TextoOR.style.color="rgb(4, 90, 21)";
        Botao.innerHTML= "Ocultar Mensagem";
    }
    else{
        Botao.style.background="green";
        TextoOR.textContent="";
        Botao.innerHTML= "Clique aqui para ver uma mensagem!";
    }
})