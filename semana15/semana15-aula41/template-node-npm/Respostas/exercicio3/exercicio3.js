const tasks = [
    "Lavar a louça",
    "Comprar o leite",
    "Fazer comida"
]

const task = process.argv[2]

tasks.push(task)
console.log(`Tarefa "${task}" adicionada com sucesso!`)
console.log(`Lista de tarefas: ${tasks}`)