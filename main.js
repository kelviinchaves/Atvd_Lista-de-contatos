const form = document.getElementById('form-dados');
const tel = [];
const nome = [];
let linhas = '';
form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();

});

function adicionaLinha() {
    const inputNome = document.getElementById('nome');
    const inputTelefone = document.getElementById('telefone');

    if (nome.includes(inputNome.value)) {
        alert(`O nome ${inputNome.value} já foi inserido`);
    } else {

        nome.push(inputNome.value);
        tel.push(inputTelefone.value);

        linhas +=
            `<tr>
            <td>${inputNome.value}</td>
            <td>${inputTelefone.value}</td>
        </tr>` ;

    }

    inputNome.value = '';
    inputTelefone.value = '';

}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}