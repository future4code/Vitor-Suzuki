// a) Para acessar os parâmetros passados na linha de comando para o node, usamos o process.argv

// b) e c) 

 const user = process.argv[2];
 const userAge = Number(process.argv[3]);

 console.log(`Olá, ${user}! Você tem ${userAge} anos.`)
 console.log(`Olá, ${user}! Você tem ${userAge} anos. Em sete anos você terá ${userAge + 7}`)


 
