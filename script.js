let carrinho = [];
let total = 0;

function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const ul = document.getElementById('itensCarrinho');
    const totalPreco = document.getElementById('totalPreco');
    
    ul.innerHTML = '';  // Limpa a lista antes de atualizar
    
    carrinho.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${item.nome} - R$ ${item.preco.toFixed(2)} 
                        <button onclick="removerDoCarrinho(${index})">Remover</button>`;
        ul.appendChild(li);
    });

    total = carrinho.reduce((acc, item) => acc + item.preco, 0);
    totalPreco.textContent = total.toFixed(2);
}

function removerDoCarrinho(index) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
}

function finalizarCompra() {
    if (carrinho.length > 0) {
        alert(`Compra finalizada! Total: R$ ${total.toFixed(2)}`);
        // Redireciona para a página de agradecimento
        window.location.href = "obrigado.html";  // Redireciona para a página de agradecimento
    } else {
        alert('Seu carrinho está vazio!');
    }
}

function continuarComprando() {
    alert('Você pode adicionar mais itens ao carrinho!');
}
