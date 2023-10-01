// * box 1
const boxOne = document.getElementById('root').children[0]
console.dir(boxOne)

// * emoji array
const emoticons = [
  '😂', '😭', '😚', '😍', '😁', '🍁', '🌰', '🌲', '🌻', '🌺', '🐺', '🐗', '🐼', '🐶', '🐱', '🎤', '🎹', '🎸', '🎻', '🎷', '⚽', '⚾', '🏀', '🏓', '🏸', '🚗', '🚌', 
  '🚃', '🚄', '🛫'
]

// * price array (should be revised with the correct price of items.)
const price = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11, 12, 13,14, 15, 16, 17 , 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

// * create emoji items && backgroundColor change

const totalItemPrice = 0

for (i=0; i < emoticons.length; i++) {
  const makeBtn = document.createElement('button');
  const button = boxOne.children[i]
  boxOne.appendChild(makeBtn);
  boxOne.children[i].textContent =  price[i];

  const toggleButton = boxOne.children[i];
  
  // * backgroundColor change when 'click'
  toggleButton.addEventListener('click', function() {
    if (toggleButton.style.backgroundColor === '' ) {
      toggleButton.style.backgroundColor = 'salmon';
      // itemPrice = parseInt(toggleButton.textContent)
      // totalItemPrice += itemPrice
      console.log(totalItemPrice)
    } else {
      toggleButton.style.backgroundColor = '';
    }
  });
  }

  
  // const makeBtn = document.createElement('button')
  // boxOne.appendChild(makeBtn);
  // btn = boxOne.children[0]
  // console.dir(btn)

  // * box 2
// * box 2 elements
const boxtwo = document.getElementById('root').children[1];
console.dir(boxtwo);

const createDiv = document.createElement('div');
boxtwo.appendChild(createDiv);

const createInputText = document.createElement('input');
boxtwo.appendChild(createInputText);

const makeBtn = document.createElement('button');
boxtwo.appendChild(makeBtn);


// * text
boxtwo.children[0].textContent = "Green Academy Vending Machine";

// * input
// * console textContent of the button when click.

const inputT = boxtwo.children[1];

inputT.addEventListener('input', function() {
  if (isNaN(inputT.value) === true) {
    console.log("숫자만 입력해주세요.")
    } else {
      console.log('값을 입력했습니다.')
  }
})

// * button
const btn = boxtwo.children[2];
btn.textContent = "버튼"
// btn.addEventListener("click", function() {
  // console.log(inputT.value)})

btn.addEventListener("click", function() {
  // console.log(a)
  // const a = inputT.value - price[i]

  for (i=0; i < emoticons.length; i++) {
    
    if (price[i] === inputT.value) {
      console.log("일치합니다.")
    } else {
      console.log("불일치합니다.")
    }
  }
})