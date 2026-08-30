function calcularMedia(){

    var nota1 = document.getElementById("nota1").value;
    var nota2 = document.getElementById("nota2").value;
    var nota3 = document.getElementById("nota3").value;
    var nota4 = document.getElementById("nota4").value;

    if(nota1 != "" && nota2 != "" && nota3 != "" && nota4 != ""){

        var media = (
            parseFloat(nota1) +
            parseFloat(nota2) +
            parseFloat(nota3) +
            parseFloat(nota4)
        ) / 4;

        document.getElementById("media").innerHTML =
            "Média: " + media.toFixed(1);
    }
}


function registrarResultado(){

    var nome = document.getElementById("nome").value;

    var notas = [];

    notas[0] = document.getElementById("nota1").value;
    notas[1] = document.getElementById("nota2").value;
    notas[2] = document.getElementById("nota3").value;
    notas[3] = document.getElementById("nota4").value;


    if(notas[0] == "" || notas[1] == "" || notas[2] == "" || notas[3] == ""){

        document.getElementById("resultado").innerHTML =
            "Preencha todas as notas";

    }else{

        var media = (
            parseFloat(notas[0]) +
            parseFloat(notas[1]) +
            parseFloat(notas[2]) +
            parseFloat(notas[3])
        ) / 4;


        if(media > 6){

            document.getElementById("resultado").innerHTML =
                nome + " - APROVADO";

        }else if(media >= 2){

            document.getElementById("resultado").innerHTML =
                nome + " - EXAME";

        }else{

            document.getElementById("resultado").innerHTML =
                nome + " - REPROVADO";
        }
    }
}