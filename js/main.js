//calcula tam da frase e imprime no console
var frase = $(".frase").text();
var numPalavras = frase.split(" ").length;

var tempoJogo = $("#tempo-jogo");
//Guarda valor inicial do tempo para quando resetar o sistema saber qual o tempo inicial
var tempoInicial = tempoJogo.text();

//pega o tamanho da frase e mostra na tela
var tamanhoFrase = $("#tamanho-frase");
tamanhoFrase.text(numPalavras);

var campo = $("#campo-digitacao");
campo.on("input", function(){
    //pega o conteúdo do campo de texto
    var frase = campo.val();
    //calcula a quantidade de caracteres(incluindo espaços) da frase digitada
    var nCaracteresDigitados = frase.length;
    //Mostra no span com id caracteres-digitados o valor calculado acima.
    $("#caracteres-digitados").text(nCaracteresDigitados);

    //quebra a frase em palavras(pelo espaço em branco) 
    var nPalavrasDigitadas = frase.split(" ").length;
    //Mostra no span com id palavras-digitadas o valor calculado acima.
    $("#palavras-digitadas").text(nPalavrasDigitadas);
});



campo.on("focus", function(){
        var cronometro = setInterval(function(){
            var tempoRestante = tempoJogo.text();
            //se o tempo chegar a zero para.
            if(tempoRestante <= 0){
                //Bloqueia tela
                campo.attr("disabled", true);
                clearInterval(cronometro);
                nome = $("#nome").val()
                palavrasDigitadas = $("#palavras-digitadas").text();
                //x60 para transformar em por minuto.
                pontuacao = (palavrasDigitadas/tempoInicial) * 60;
                $('#tabela-resultado').append('<tr><td>'+ nome +'</td><td>' + pontuacao + '</td></tr>');
            }else{
                tempoRestante--;
                tempoJogo.text(tempoRestante);
            }
        }, 1000);
});


$(".botao-reiniciar").on("click", function(){
    //Desbloqueia tela
    campo.attr("disabled", false);
    campo.val("");
    $("#caracteres-digitados").text("0");
    $("#palavras-digitadas").text("0");
    $("#tempo-jogo").text(tempoInicial);
    });

  