const task3Element = document.getElementById('task-3');



function greeting(){
  alert('Hi I am your developer. Xyp Collen Escader');
}

function introduceSelf(dreams){
    alert(`My dream is to become a ${dreams}`);
}

function combineWOrd(firstWord, secondWord, thirdWord){
    const result = firstWord + secondWord + thirdWord;
    return result;
}
task3Element.addEventListener('click', greeting);




greeting();
introduceSelf('Web-developer: Xyp Collen Escader');
const combinedText = combineWOrd('Hi I am your web developer, ','I am resposible why this website is more interactive.', ' My name is Xyp Collen Escader.' );

alert(combinedText);