//Jérémie Braillon



//Etape 1 : Cliquer sur les boutons chiffres et les afficher dans la console  --> Done
//Etape 2 : Afficher les chiffres dans l'écran de la calculatrice --> Done
//Etape 3 : Afficher les nombres dans l'écran de la calculatrice --> Done
//Etape 4 : Afficher les opérations dans l'écran de la calculatrice --> Done 
//Etape 5 : Réaliser les calculs en appuyant sur le bouton égal --> Done
//Etape 6 : Réaliser les calculs avec les nombres à virgule




const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')
const display = calculator.querySelector('.calculator__display')
let calcul = null;
let resultat = 0;
let operator=false;
let number=false;
let divByZero = false;

keys.addEventListener('click', e => {
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNum = display.textContent
    const buttonclass = key.class
    
    if (key.matches('button')) {
        if (!action && !divByZero){  //Clique sur une case numéro
            if (operator){
                display.textContent = keyContent
                operator = false
            } else if (displayedNum === '0') {
                display.textContent = keyContent
            } else {
                display.textContent = display.textContent + keyContent
            }
            number=true

        } else if (action === "decimal" && !divByZero){
            display.textContent += '.'
        } else if (action === "clear"){
            display.textContent = '0'
            divByZero = false
            number = false
            operator = false
            calcul = null
        } else if ((action === "multiply" || action === "add" || action === "subtract" || action === "divide") && !divByZero && number){
            if (calcul==="multiply"){
                resultat = resultat*parseFloat(displayedNum)
            } else if (calcul === "add"){
                resultat += parseFloat(displayedNum)
            } else if (calcul === "subtract"){
                resultat -= parseFloat(displayedNum)
            } else if (calcul === "divide"){
                if (displayedNum != '0'){
                    resultat = resultat/parseFloat(displayedNum)
                } else{
                    display.textContent = "Div by 0, press AC"
                    divByZero = true
                } 
            }else {
                resultat = parseFloat(displayedNum)
            }
            number = false
            calcul = action
            operator = true
        } else if (action === "calculate" && number){
            if (calcul==="multiply"){
                resultat = resultat*parseFloat(displayedNum)
            } else if (calcul === "add"){
                resultat += parseFloat(displayedNum)
            } else if (calcul === "subtract"){
                resultat -= parseFloat(displayedNum)
            } else if (calcul === "divide"){
                if (displayedNum != '0'){
                    resultat = resultat/parseFloat(displayedNum)
                } else{
                    display.textContent = "Div by 0, press AC"
                    divByZero = true
                } 
            }else {
                resultat = parseFloat(displayedNum)
            }
            if (!divByZero){
                display.textContent = resultat
                calcul = null
            }
        }
    }
})
