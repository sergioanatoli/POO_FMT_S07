class Produto{
    nome;
    preco;
    quantidade;

    constructor(nomeProduto, precoProduto, quantidadeProduto){
        this.nome = nomeProduto
        this.preco = precoProduto
        this.quantidade = quantidadeProduto
    }

    Vender(quantidadeVendida){
        if(quantidadeVendida > this.quantidade){
            console.log("Estoque insuficiente")
        }else{
            this.quantidade = this.quantidade - quantidadeVendida;
            console.log(this.quantidade);
        }
    }

    Repor(quantidadeReposta){
        this.quantidade += quantidadeReposta;
    }
    }