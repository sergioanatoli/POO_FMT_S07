// class Produto{
//     nome;
//     preco;
//     quantidade;

//     constructor(nomeProduto, precoProduto, quantidadeProduto){
//         this.nome = nomeProduto
//         this.preco = precoProduto
//         this.quantidade = quantidadeProduto
//     }

//     Vender(quantidadeVendida){
//         if(quantidadeVendida > this.quantidade){
//             console.log("Estoque insuficiente")
//         }else{
//             this.quantidade = this.quantidade - quantidadeVendida;
//             console.log(this.quantidade);
//         }
//     }

//     Repor(quantidadeReposta){
//         this.quantidade += quantidadeReposta;
//     }

//     mostrarEstoque(){
//         console.log(`O produto ${this.nome} possui ${this.quantidade} unidades disponíveis`);
//     }

//     atualizarPreco(novoValor){
//         this.preco = novoValor;
//     }
// }


// class Pessoa{
//     nome;
//     idade;
//     profissao;

//     constructor(nomePessoa, idadePessoa, profissaoPessoa){
//         this.nome = nomePessoa
//         this.idade = idadePessoa
//         this.profissao = profissaoPessoa
//     }
// }

// class Cliente extends Pessoa{
//     telefone;
//     email;
//     clienteDesde = "1994/09/11"

//     constructor(nomePessoa, idadePessoa, telefoneCliente, emailCliente, profissaoPessoa){
//         super(nomePessoa, idadePessoa, profissaoPessoa);
//         this.nome = nomePessoa
//         this.idade = idadePessoa
//         this.profissao = profissaoPessoa
//         this.telefone = telefoneCliente
//         this.email = emailCliente
//     }
// }