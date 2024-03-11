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

    mostrarEstoque(){
        console.log(`O produto ${this.nome} possui ${this.quantidade} unidades disponíveis`);
    }

    atualizarPreco(novoValor){
        this.preco = novoValor;
    }
}