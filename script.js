const text = document.querySelector('textarea')
const totalWords = document.querySelector('#totalWords')

let valueText

text.addEventListener('keyup', changeText)

function changeText(){
    valueText = text.value
    console.log(valueText)  

    wordCounter()
}

function wordCounter(){
   var counter = 0
     valueText.replace(/(?:^|\s )\S/, function(counter){
      counter =+ 1
    })
    console.log(counter)
}
