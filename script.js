document.addEventListener("DOMContentLoaded", function() {
    // Array para armazenar os produtos
    var produtos = [];

    // Função para adicionar novo produto à listagem
    function adicionarProduto(nome, valor) {
        produtos.push({ nome: nome, valor: parseFloat(valor) });
        atualizarListagem();
    }

    // Função para atualizar a listagem de produtos
    function atualizarListagem() {
        // Limpa a tabela
        var corpoTabela = document.getElementById("corpoTabela");
        corpoTabela.innerHTML = "";

        // Ordena os produtos pelo valor
        produtos.sort(function(a, b) {
            return a.valor - b.valor;
        });

        // Adiciona os produtos à tabela
        produtos.forEach(function(produto) {
            var novaLinha = document.createElement("tr");
            novaLinha.innerHTML = `<td>${produto.nome}</td><td>${produto.valor.toFixed(2)}</td>`;
            corpoTabela.appendChild(novaLinha);
        });

        // // Adiciona o botão de cadastrar produto na listagem
        var btnCadastrarProduto = document.createElement("button");
        btnCadastrarProduto.textContent = "Cadastrar Produto";
        btnCadastrarProduto.addEventListener("click", function() {
            document.getElementById("formulario").style.display = "block";
            document.getElementById("listagem").style.display = "none";
        });
        var novaLinhaBtn = document.createElement("tr");
        var novaCelulaBtn = document.createElement("td");
        novaCelulaBtn.setAttribute("colspan", "2");
        novaCelulaBtn.appendChild(btnCadastrarProduto);
        novaLinhaBtn.appendChild(novaCelulaBtn);
        corpoTabela.appendChild(novaLinhaBtn);
    }

    // Submissão do formulário
    document.getElementById("formProduto").addEventListener("submit", function(event) {
        event.preventDefault();
        var nome = document.getElementById("nome").value;
        var descricao = document.getElementById("descricao").value;
        var valor = document.getElementById("valor").value;
        var disponivel = document.getElementById("disponivel").value;

        // Adiciona o novo produto à listagem
        adicionarProduto(nome, valor);

        // Limpa os campos do formulário
        document.getElementById("formProduto").reset();

        // Mostra a listagem após cadastrar um novo produto
        document.getElementById("formulario").style.display = "none";
        document.getElementById("listagem").style.display = "block";
    });

    // Ao carregar a página, mostrar automaticamente a listagem
    // Supondo que você já tenha os dados dos produtos, você pode carregá-los aqui
    // Por enquanto, vou adicionar alguns produtos de exemplo
    adicionarProduto("Mouse:", "10.00");
    // adicionarProduto("Teclado:", "20.00");
    // adicionarProduto("Fone:", "15.00");
});

