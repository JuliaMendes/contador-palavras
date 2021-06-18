var text = document.querySelector('textarea')
var totalWords = document.querySelector('#totalWords')
const boxResult = document.querySelector('.boxResult')


var valueText


text.addEventListener('keyup', changeText)

function changeText(){
    valueText = text.value

    wordCounter()
}

function wordCounter(){
  var counter = 0
  valueText.replace(/[^\s]+/g, function(){
    counter = counter + 1
  })
  console.log(counter)

  createCounterBox(counter)
}


function createCounterBox(counter){

  const counterHTML = `
  <div>
    <h2>Palavras: ${counter}</h2>
  </div>

  `
  boxResult.innerHTML = counterHTML

}
