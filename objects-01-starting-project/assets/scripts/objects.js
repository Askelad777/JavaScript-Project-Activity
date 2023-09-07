const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');
  

// ARRAY || TEMPORARY DATABASE
const movies = [];

const renderMovieList = (filter = '') => {
  const movieList = document.getElementById('movie-list');

  // CONDITIONA STATEMENT OF DISPLAYING LIST:
  if(movies.length === 0){
    movieList.classList.remove('visible');
  }else{
    movieList.classList.add('visible'); 
  }
  

  movieList.innerHTML = '';

  const filteredMovies = !filter ? movies : movies.filter(movie => movie.info.title.includes(filter));

  // LOOPINGS WITH A CONDITION TO DISPLAY the COMPLETE INFO
  filteredMovies.forEach( movie => {
    const movieEl = document.createElement('li');
    const { info, ...otherProps } = movie;
    // const {title: movieTitle} = info;
    console.log(otherProps);

    let {getFormattedTitle} = movie;

    getFormattedTitle = getFormattedTitle.bind(movie); 
    let text = getFormattedTitle() + ' - ';
    for(const key in info){
      if(key !== 'title' && key !=='_title'){
        text = text + `${key}: ${info[key]}`;
      }
    }

    movieEl.textContent = text;
    movieList.append(movieEl);
  });

};

const addMovieHandler = () =>{
  const title = document.getElementById('title').value;
  const altName = document.getElementById('extra-name').value;
  const altValue = document.getElementById('extra-value').value;

  if(
    altName.trim() ===''||
    altValue.trim() ===''){
      return;
    }

    const newMovie  = {
      info: {
        set title(val) {
          if (val.trim() === ''){
            this._title = 'DEFAULT';
            return;
          }
          this._title = val;
        },
        get title(){
          return this._title;
        },
      [altName] : altValue
    },
    id: Math.random().toString(),getFormattedTitle : function() {
      return this.info.title.toUpperCase();
    }
  };

  newMovie.info.title = title;
  console.log(newMovie.info.title);
  movies.push(newMovie);
  renderMovieList();
};


const searchMovieHandler = ()=>{
   const filterTerm = document.getElementById('filter-title').value;
   renderMovieList(filterTerm);
};
// EVENT LISTENER

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler)