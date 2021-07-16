const op = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

let result = "";

switch(op) {
    case "soma":
        result = num1 + num2
        break

    case "sub": 
        result = num1 - num2
        break

    case "mult": 
        result = num1 * num2

    case "div": 
        result = num1 / num2 
}