let nameSpaceship = window.prompt('Insira o nome da Espaçonave')

let nameInverted = ""

for(let i = nameSpaceship.length - 1; i >=0; i--){
    if(nameSpaceship[i] == "e" || nameSpaceship[i] == "E"){
        break
    }
    nameInverted +=nameSpaceship[i]
}

alert('Nome original da Nave: ' + nameSpaceship + '\n Nome após inverter: ' + nameInverted)