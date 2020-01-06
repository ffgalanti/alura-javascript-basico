var campoFiltro = document.querySelector('#filtrar-tabela');

campoFiltro.addEventListener('input', function () {
    var pacientes = document.querySelectorAll('.paciente');

    if (this.value.length > 0) {
        pacientes.forEach(function(paciente){            
            tdNome = paciente.querySelector('.info-nome');
            nome = tdNome.textContent;
    
            var expressaoRegular = new RegExp(campoFiltro.value, "i");

            paciente.classList.remove('invisivel');
            if(!expressaoRegular.test(nome)) {
                paciente.classList.add('invisivel');
            } 
        });
    } else {
        pacientes.forEach(function (paciente) {
            paciente.classList.remove('invisivel');
        });
    }
});