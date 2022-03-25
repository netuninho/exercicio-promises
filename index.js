const fs = require("fs/promises");

function soma(num1, num2){
    return new Promise(async (resolve, reject) => {
        if(!num1 || !num2) {
            return reject("Não são números");
        }

        await fs.appendFile('resultado.txt', `${num1} + ${num2} = ${num1 + num2}\n`);
    })
}

soma(50,50);