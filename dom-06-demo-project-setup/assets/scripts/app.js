// const initialization

const addMovieModal = document.getElementById('add-modal');

const startAddMovieButton = document.querySelector('header button');

const backdrop = document.getElementById('backdrop');

const cancelMovieModal = addMovieModal.querySelector('.btn--passive');

const confirmMovieButton = cancelMovieModal.nextElementSibling;

const movies = [];

const  entryTextSectionInput = document.getElementById('entry-text');

//fetching value from browser 

const userInputs = addMovieModal.querySelectorAll('input');
//parameter(tag)

// FUNCTION BELOW
const toggleBackdrop = () =>{
  backdrop.classList.toggle('visible');
}
const toggleMovieModal =  () =>{
    addMovieModal.classList.toggle('visible');
    toggleBackdrop();
};

const toggleBackdropHandler = () =>{
  toggleMovieModal();
};

const cancelAddMovieModal = () =>{
    toggleMovieModal();
};

const clearMovieValue =()=>{
  userInputs[0].value = '';
  userInputs[1].value = '';
  userInputs[2].value = '';
}; 



const updateScreendisplay = () =>{
  if(movies.length === 0){
    entryTextSectionInput.style.display ='block';
  }else{
    entryTextSectionInput.style.display ='none';
  }

};


const addMovieHandler = () => {
  const titlevalue = userInputs[0].value;
  const imageUrlvalue = userInputs[1].value;
  const ratingsValue = userInputs[2].value;

  if(
    titlevalue.trim() ==='' || 
    imageUrlvalue.trim() === '' || 
    ratingsValue === '' ||
    +ratingsValue < 1 ||
    +ratingsValue >5){
      alert('Please input value or do follow the rules!')

  }
  const newMovies = {
    title: titlevalue,
    image: imageUrlvalue,
    ratings: ratingsValue
  };

  movies.push(newMovies);
  console.log(movies);
  toggleMovieModal();
  clearMovieValue();
  updateScreendisplay();
};


startAddMovieButton.addEventListener('click', toggleMovieModal)

backdrop.addEventListener('click', toggleBackdropHandler);

cancelMovieModal.addEventListener('click', cancelAddMovieModal);

confirmMovieButton.addEventListener('click', addMovieHandler )