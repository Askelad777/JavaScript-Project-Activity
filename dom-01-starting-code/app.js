const listLis = document.getElementsByTagName('li');

// 
const listOfLi = document.querySelectorAll('li');
console.log(listOfLi);
// 
for(const listElement of listLis){
  console.log(listElement);
}

// DOM CHANGE PROPETIES

const li = document.querySelector('li:last-of-type');
li.textContent = li.textContent +' It changed the way I want it to be.'