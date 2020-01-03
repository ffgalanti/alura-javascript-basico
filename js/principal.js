var titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista';

var pacientes = document.querySelectorAll('.paciente');

console.log(pacientes.length);

for(var i = 0; i < pacientes.length; i++) {

    var tdPeso = pacientes[i].querySelector('.info-peso');
    var tdAltura = pacientes[i].querySelector('.info-altura');
    var tdImc = pacientes[i].querySelector('.info-imc');
    
    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;
    
    var pesoEhValido = true;
    var alturaEhValida = true;
    
    if (peso <= 0 || peso >= 1000) {
        pesoEhValido = false;
    }
    
    if (altura <= 0 || altura >= 3.0) {
        alturaEhValida = false;
    }
    
    if(pesoEhValido && alturaEhValida) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    } else {
        tdImc.textContent = 'Peso/Altura inválido';
    }
}