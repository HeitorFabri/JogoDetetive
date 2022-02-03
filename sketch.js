var player;
var NPCteste;
var armazem;
var pistaNPC;
var pistaArmazem;
var NPCguia;
var pistaGUIA;
var chaveVestiario;
var vestiario;
var pistaVestiario;
var gaveta;
var pistaGaveta;
var cozinha;
var portaSecretaCozinha;
var porao;
var NPCFULANO;
var escuro;
var disjuntor;

function preload(){
  
}

function setup(){
  createCanvas(4000,4000);
  
 

  NPCteste = createSprite(400, 300, 40, 40);

  armazem = createSprite(900, 300, 200, 200);

  NPCguia = createSprite(800, 600, 40, 40);

  chaveVestiario = createSprite(200 , 200, 20, 20);
  chaveVestiario.visible = false;

  vestiario = createSprite(200, 100, 300, 300);

  gaveta = createSprite(1500, 100, 30, 40);

  cozinha = createSprite(1900, 200, 300, 200);

  portaSecretaCozinha = createSprite(2100, 200, 20, 40);

  porao = createSprite(2150, 200, 200, 200);

  escuro = createSprite(2150, 200, 200, 200);
  escuro.shapeColor= "black";

  disjuntor = createSprite(1007, 300, 15, 20);
  disjuntor.shapeColor = "purple";

  player = createSprite(800, 200, 40, 40);
  player.shapeColor = "blue";

  pistaNPC = {
    pista1:"Olá, você deve ser o detetive contratado para encontrar o FULANO. ",
    pista2:"Até que enfim você chegou, não sei se isso pode te ajudar, mas a última vez que vi FULANO foi no armazém"
  }

  pistaArmazem = {
    pista1:"Oi Ciclano, estou escrevendo este bilhete para saber se você virá para a minha festa de aniversário.",
    pista2:"Quando chegar, nosso GUIA te levará até o salão de festas, ele estará esperando na entrada da mansão.",
    pista3:"Conto com a sua presença! "
  }

  pistaGUIA = {
    pista1:"Senhor detetive, é uma honra recebe-lo.",
    pista2:"Antes de nosso convidado especial chegar, FULANO disse que vestiria uma roupa mais 'elegante' para recepcioná-lo.",
    pista3:"Aqui está uma chave para o VESTIÁRIO, espero que ajude."

  }

  pistaVestiario = {
    pista1:"Você encontra uma pequena chave, parece ser de uma gaveta, pode ser importante."
  }

  pistaGaveta = {
    pista1:"Querido diário, hoje á noite ouvi sons um tanto quanto estranhos na cozinha.",
    pista2:"Acho melhor dar uma olhada amanhã."

  }

}


function draw(){
  background("white");

  if(keyDown("w")){
    player.y = player.y-6;
  }

  if(keyDown("s")){
    player.y = player.y+6;
  }

  if(keyDown("d")){
    player.x = player.x+6;
  }

  if(keyDown("a")){
    player.x = player.x-6;
  }

  interacaoNPC(NPCteste, pistaNPC);
  interacaoNPC(armazem, pistaArmazem);
  interacaoNPC(NPCguia, pistaGUIA);
  interacaoNPC(vestiario, pistaVestiario);
  interacaoNPC(gaveta, pistaGaveta);
  
  if(player.isTouching(NPCguia) && keyDown("e")){
    setTimeout(() => {
      chaveVestiario.visible = true;
    }, 3000);
  }

  player.collide(escuro);

  drawSprites();
}

function interacaoNPC(NPC, fala){
  if(player.isTouching(NPC) && keyDown("e")){
   
    textSize(18);
    text(fala.pista1, player.x-250, player.y+200);
    text(fala.pista2, player.x-250, player.y+250);
    text(fala.pista3, player.x-250, player.y+300);
   
   
    
  }
}