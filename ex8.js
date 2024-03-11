class Pessoa{
    nome;
    idade;
    profissao;

    constructor(nomePessoa, idadePessoa, profissaoPessoa){
        this.nome = nomePessoa
        this.idade = idadePessoa
        this.profissao = profissaoPessoa
    }
}

class Cliente extends Pessoa{
    telefone;
    email;
    clienteDesde = "1994/09/11"

    constructor(nomePessoa, idadePessoa, telefoneCliente, emailCliente, profissaoPessoa){
        super(nomePessoa, idadePessoa, profissaoPessoa);
        this.nome = nomePessoa
        this.idade = idadePessoa
        this.profissao = profissaoPessoa
        this.telefone = telefoneCliente
        this.email = emailCliente
    }
}