// #CONFIGURANDO O BROKEN MQTT PARA NAVEGADOR
const MQTT_URL = "wss://test.mosquitto.org:8081";

const clientId = 'web-casa-inteligente-guilherme';

// const cliente = mqtt.connect(MQTT_URL,{
// clientId,
// clear: true,
// ConnectTimeout: 4000,
// });
// ## Variaveis dos dispositivos
const lampSalaInput =document.getElementById("lamp-sala");
const lampSalaTexto =document.getElementById("lamp-sala-texto");
const cortinaSalaInput=document.getElementById("cort-sala");
const cortinasalatexto =document.getElementById("cortina-sala-texto");
const Portasalatexto =document.getElementById("Porta-sala=texto");
const portaSalaInput =document.getElementById("port-sala");
const Cozinhacozinhatexto=document.getElementById("cozinha2");
const CozinhacozinhaInput=document.getElementById("Cozinha-cozinha-texto");


// ##### Alterando estado dos dispositivos 
//pegando o evento de mundança do botão (ligando/desligando)
lampSalaInput.addEventListener("change", () => {
    //Verificar de o botão esta como ligado
    const ligado = lampSalaInput.checked === true;

    if (ligado === true){
      console.log("Lampada-ligada");
      lampSalaTexto.innerHTML = "ligado";
    } else {
        console.log("Lampada-desligada");  
        lampSalaTexto.innerHTML = "Desligado";
    }
});

cortinaSalaInput.addEventListener("change", () => {
   const ligado = cortinaSalaInput.checked ===true;


   if (ligado === true){
    console.log("Cortina-aberta");
    cozinha2.innerHTML = "Aberta";
    } else {
        console.log("Cortina fechada");
        cozinha2.innerHTML = "Desligado";
    }
});
    
        portaSalaInput.addEventListener("change", () => {
        const ligado = portaSalaInput.checked ===true;

        if (ligado === true) {
            console.log("Porta-aberta");
            Portasalatexto.innerHTML = "Aberta";
        } else {
            console.log("Porta fechada");
            Portasalatexto.innerHTML = "Fechada";
        }
    });

    cozinha2.addEventListener("change", () => {
        const ligado = CozinhacozinhaInput.checked === true;

        if (ligado === true) {
            console.log ("Luz acessa");
            Cozinhacozinhatexto.innerHTML = "Aberta";
        } else {
            console.log ("Luz desligada");
            Cozinhacozinhatexto.innerHTML = "desligada";
        }
    });





//# chamando um evento do JS do tipo "DmContenteLoaded", que é o evento que acontece
// após toda a minha página de html ser carregada
// document.addEventListener("DOMContentLoaded", ()=> {
// console.log("Testando evento de carregamento de HTML");
// console.log("Página carregada com sucesso ✅... Conectando ao Mosquitto!");

// // ### Estabalecendo a conexão com o broker mqtt
// cliente.on("connect", () => {
// console.log("Conexão estabelecida com Sucesso ✅!");
// console.log("Cliente conectado: ", clientId);

// // ### criando um topico para acessar mensagens do MQTT
// const topicoteste ='test/guilherme';

// //### recebendo mensagens do topico criado
// cliente.subscribe(topicoteste);
// });

// // ### Preparando mensagem de erro caso algo aconteça
// cliente.on("error", () => {
//     console.error("Erro ao conectar ao Broker MQTT!❌!");
//     console.error(erro);
// });

// //## Recebendo as mensagem dos tópicos assinados no MQTT pelo cliente

// cliente.on("message",(topico, mensagem) => {
//    console.log("topico recebido:" ,topico);
//     console.log("Mensagem recebida: ",mensagem);
// })

// }); 