//Jérémie Braillon



//Etape 1 : Cliquer sur les boutons chiffres et les afficher dans la console
//Etape 2 : Afficher les chiffres dans l'écran de la calculatrice
//Etape 3 : Afficher les nombres dans l'écran de la calculatrice
//Etape 4 : Afficher les opérations dans l'écran de la calculatrice
//Etape 5 : Réaliser les calculs en appuyant sur le bouton égal
//Etape 6 : Réaliser les calculs avec les nombres à virgule


//Etape 1 :

const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')

keys.addEventListener('click', e => {
    const key = e.target
    const action = key.dataset.action
    if (key.matches('button')) {
        //console.log('button clicked', e.target.innerText)
        if (!action){
            console.log('number key!')
        }
        if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide'){
            console.log('operator key!')
        }
        if (action === 'decimal'){
            console.log('decimal key!')
        }   
        if (action === 'clear'){
            console.log('clear key!')
        }
        if (action === 'calculate'){
            console.log('equal key!')
        }
  }
})


//Etape 2 :

const display = document.querySelector('.calculator__display')

