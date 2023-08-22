
// TASK #1
const person1 = 'Xyp Collen Escader';
const greeting = (name) => console.log(`Hello there! ${name}`);



// TASK #2

// T2.A
const messageTemplate = 'How are you today ?';
const greetTemplate = (mTemplate,name) => console.log(mTemplate + name);

// T2.B

const messageToUser = () => console.log('How may I help you Mr. Escader?');

// T2.C 

const userInteraction = (name) => {
    return `Let me know if you need anything ${name}`;
};


greeting(person1);
greetTemplate(messageTemplate, person1);
messageToUser();
userInteraction(person1);


// TASK 3 
const Utext = prompt('Please enter a message: ','');
const Uname = prompt('Please enter a name: ','')
const userMessage = (userName, userText = 'How are you to day?') =>{
  alert(`${userName} ${userText}`);
  console.log(`${userName} ${userText}`);
};

userMessage(Uname, Utext);

// TASK 4

const checkInput = (resultHandler,...valString) =>{
  const stringChecker = (StringValue) => {
      return StringValue === '' ? 'Please Enter a string ' : StringValue;
  }

  let contString = '';

  for(const String of valString){
    contString += stringChecker(String);
  }

  resultHandler(contString);
};



const resultString = (result) =>{
  alert('The text after adding all input String: ' + result);
}

checkInput (resultString, 'Hello! ', 'I am Xyp Collen Escader.', 'A computer Science student ', 'from Cavite State University.', '');
console.log(checkInput);