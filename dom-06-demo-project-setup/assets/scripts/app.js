// DOCUMENT OBJECT MODEL - ACCESSING HTML ELEMENTS  

const addMovieModal = document.getElementById('add-modal');

const startAddMovieButton = document.querySelector('header button');

const backdrop = document.getElementById('backdrop');

const cancelMovieModal = addMovieModal.querySelector('.btn--passive');

const confirmMovieButton = cancelMovieModal.nextElementSibling;

const movies = [];

const  entryTextSectionInput = document.getElementById('entry-text');

//fetching value from browser 

const userInputs = addMovieModal.querySelectorAll('input');
              //parameter(tag)  // Using userInputs.value to access VAL.




// LOGIC of RENDEERING VALUE IN SCREEN FUNCTION BELOW
const toggleBackdrop = () =>{
  backdrop.classList.toggle('visible');
}

const closeMovieModal = () =>{
  addMovieModal.classList.remove('visible');
  toggleBackdrop();

};

const showMovieModal =  () =>{
    addMovieModal.classList.add('visible');
    toggleBackdrop();
};

const toggleBackdropHandler = () =>{
  closeMovieModal();
};

const cancelAddMovieModal = () =>{
    closeMovieModal();
    clearMovieValue();
};

const clearMovieValue = () => {
  for(const userInput of userInputs){
    userInput.value = '';
  }
}; 



//  SHOW DISPLAY INPUT ON SCREEN;

const updateScreendisplay = () =>{
  if(movies.length === 0){
    entryTextSectionInput.style.display ='block';
  }else{
    entryTextSectionInput.style.display ='none';
  }

};
const rendeerMoviesValue = (id, title, imageUrl, rating) =>{
  const newMovieList = document.createElement('li');
  newMovieList.className = 'movie-element';
  newMovieList.innerHTML = `
    <div class="movie-element__title" alt=""${title}>
      <img scr="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating} /5 stars</p>
    </div> 
  `;

  newMovieList.addEventListener('click', deleteMovieHandler.bind(null, id))
  const listRoot = document.getElementById('movie-list');
  listRoot.append(newMovieList);
};

// DELETE AND ADD MOVIE FUNCTION - START 

const deleteMovie = movieId =>{
  let movieIndex = 0;
  for(const movie of movies){
    if(movie.id === movieId){
      break;
    }
    movieIndex++;
  };
  movies.splice(movieIndex, 1);
  const listRoot = document.getElementById('movie-list');
  listRoot.children[movieIndex].remove();
  // listRoot.removeChild(listRoot.children[movieIndex]);


};
const deleteMovieHandler = (movieId) =>{
  const deleteMovieModal = document.getElementById("delete-modal");

  deleteMovieModal.classList.add('visible')
  //deleteMovie(movieId);
  backdrop();

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
    +ratingsValue > 5){
      alert('Please input value or do follow the rules!')

  }
  const newMovies = {
    id: Math.random().toString(),
    title: titlevalue,
    image: imageUrlvalue,
    ratings: ratingsValue
  };

  movies.push(newMovies);
  console.log(movies);
  closeMovieModal();
  clearMovieValue();
  rendeerMoviesValue(newMovies.id, newMovies.title, newMovies.image, newMovies.ratings);
  updateScreendisplay();
};

// DELETE AND ADD MOVIE FUNCTION - END  
startAddMovieButton.addEventListener('click', showMovieModal)

backdrop.addEventListener('click', toggleBackdropHandler);

cancelMovieModal.addEventListener('click', cancelAddMovieModal);

confirmMovieButton.addEventListener('click', addMovieHandler )