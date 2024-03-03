let altura = 5;

for (let i = 0; i < altura; i++) {
    let pisos = "";
    for (let j = 0; j < altura - i - 1; j++) {
        pisos = pisos + " ";
    }
    for (let j = 0; j < i + 1; j++) {
        pisos = pisos + "🟦";
        
    }
    
    console.log(pisos);
}