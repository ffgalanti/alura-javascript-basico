var btnBuscarPacientes = document.querySelector('#buscar-pacientes');

btnBuscarPacientes.addEventListener('click', function() {
    var xhr = new XMLHttpRequest();
    var msgErroAjax = document.querySelector('#erro-ajax');

    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes');

    xhr.addEventListener('load', function () {
        if (xhr.status == 200) {
            var pacientes = JSON.parse(xhr.responseText);

            pacientes.forEach(function (paciente) {
                adicionaPacienteNaTabela(paciente);
            });    

            msgErroAjax.classList.add('invisivel');
        } else {
            console.log(xhr.status);
            console.log(xhr.statusText);
            console.log(xhr.responseText);

            msgErroAjax.classList.remove('invisivel');
        }
    });

    xhr.send();
});