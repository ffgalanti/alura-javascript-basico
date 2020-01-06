var titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista';

var pacientes = document.querySelectorAll('.paciente');

for(var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector('.info-peso');
    var tdAltura = paciente.querySelector('.info-altura');
    var tdImc = paciente.querySelector('.info-imc');
    
    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;
       
    if( (validaPeso(peso).length <= 0) && (validaAltura(altura).length <= 0)) {
        var imc = caldulaImc(peso, altura);
        tdImc.textContent = imc;
    } else {
        tdImc.textContent = 'Peso/Altura inválido';
        paciente.classList.add('paciente-invalido');
    }
}

function validaPeso(peso) {
    var pesoEhValido = "";
    if (peso <= 0 || peso >= 1000) {
        pesoEhValido = "Peso inválido!";
    }

    return pesoEhValido;
}

function validaAltura(altura) {
    var alturaEhValida = "";
    
    if (altura <= 0 || altura >= 3.0) {
        alturaEhValida = "Altura inválida!";
    }

    return alturaEhValida;
}

function caldulaImc(peso, altura) {
    return (peso / (altura * altura)).toFixed(2);
}