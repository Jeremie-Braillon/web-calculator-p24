//Jérémie Braillon



//Etape 1 : Cliquer sur les boutons chiffres et les afficher dans la console
//Etape 2 : Afficher les chiffres dans l'écran de la calculatrice
//Etape 3 : Afficher les nombres dans l'écran de la calculatrice
//Etape 4 : Afficher les opérations dans l'écran de la calculatrice
//Etape 5 : Réaliser les calculs en appuyant sur le bouton égal
//Etape 6 : Réaliser les calculs avec les nombres à virgule




const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')
const display = calculator.querySelector('.calculator__display')
let calcul = null;
let resultat = 0;
let lastButtonClass=null;

keys.addEventListener('click', e => {
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNum = display.textContent
    const buttonclass = key.class
    
    if (key.matches('button')) {
        if (!action){  //Clique sur une case numéro
            if (lastButtonClasslass === "key--operator"){
                display.textContent = '0'
            }

            if (displayedNum === '0') {
                display.textContent = keyContent
            } else {
                display.textContent = display.textContent + keyContent
            }

        } else if(buttonclass === "key--operator"){

            resultat = parseInt(displayedNum)
            display.textContent += keyContent
            calcul = action

        }
        lastButtonClass=buttonclass



    }
})
