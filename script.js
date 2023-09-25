const boxOne = document.getElementById('root').children[0]
console.dir(boxOne)

const emoticons = [
  '😂', '😭', '😚', '😍', '😁', '🍁', '🌰', '🌲', '🌻',
  '🌺'
]

for (i=0; i<emoticons.length; i++) {
  const makeBtn = document.createElement('button');
  const button = boxOne.children[i]
  boxOne.appendChild(makeBtn);
  boxOne.children[i].textContent = emoticons[i];
}

// const makeBtn = document.createElement('button')
// boxOne.appendChild(makeBtn);
btn =boxOne.children[0]
console.dir(btn)
