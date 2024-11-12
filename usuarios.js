class Usuario {
    constructor(nome, cpf, endereco, email, senha) {
        this.nome = nome;
        this.cpf = cpf;
        this.endereco = endereco;
        this.email = email;
        this.senha = senha;
    }

    // Validação simples dos campos
    validarDados() {
        if (!this.nome || !this.cpf || !this.endereco || !this.email || !this.senha) {
            console.log("Todos os campos devem ser preenchidos.");
            return false;
        }
        if (!this.validarEmail(this.email)) {
            console.log("E-mail inválido.");
            return false;
        }
        if (!this.validarCPF(this.cpf)) {
            console.log("CPF inválido.");
            return false;
        }
        return true;
    }

    // Validação simples de e-mail
    validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // Validação simples de CPF (só verifica o formato com 11 dígitos)
    validarCPF(cpf) {
        return /^\d{11}$/.test(cpf);
    }

    // Método para "salvar" o usuário, simulando um cadastro
    salvar() {
        if (this.validarDados()) {
            console.log("Usuário cadastrado com sucesso:");
            console.log(`Nome: ${this.nome}, CPF: ${this.cpf}, Endereço: ${this.endereco}, E-mail: ${this.email}`);
            // Aqui você pode adicionar o código para salvar em um banco de dados
            return true;
        }
        return false;
    }
}

// Exemplo de uso
const novoUsuario = new Usuario("Maria Silva", "12345678901", "Rua das Flores, 100", "maria@example.com", "senhaSegura123");
novoUsuario.salvar();
