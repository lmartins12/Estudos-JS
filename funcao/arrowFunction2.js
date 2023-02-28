function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade) //funcao arrow torna o "this" fixo
    }, 1000)
}

new Pessoa