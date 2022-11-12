const Nome = prompt("Digite seu nome:");
const Sobrenome = prompt("Digite seu sobrenome:");

const NomeCompleto = confirm(`Seu nome completo é ${Nome} ${Sobrenome}\n Seu nome de catalogo é ${Sobrenome.toUpperCase()} ${Nome}`);
const NomeCATOLOGO = confirm(`Seu nome de catalogo é ${Sobrenome.toUpperCase()} ${Nome}`);
