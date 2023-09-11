class Courses{
  constructor(courseTitle,Length,coursePrice){
    this.title = courseTitle;
    this.courselength = Length;
    this.price = coursePrice;
  }
  // Method: A

  renderCalculation(){
    const sum  = this.price / this.courselength
    console.log('$' + sum + ' per Length')
  }

  renderSummary(){
    console.log(`The title of this course called ${this.title}. With a leght of ${this.courselength}hrs and it cost ${this.price}   
    
    
    
    `)
  }
}


class PracticalCourse extends Courses{
  constructor(title,courselength,coursePrice,numberofExercise){
    super(title,courselength,coursePrice);
    this.Exercises = numberofExercise;
  }

  renderNumExercises(){
    console.log(`The number of exercises of this ${this.title} is : `+this.Exercises);
  } 
}



class TheoriticalCourse extends Courses{
    constructor(title,courselength,coursePrice){
    super(title,courselength,coursePrice);
  }
  renderPublish(){
    console.log(`This ${this.title} Course is to enhance the skills of a programmer on a certain fields like DATABASE/LOGICS/SERVER-SIDES`);
  }
}


// instantiation and printing on the console 


const Course1 = new PracticalCourse('JavaScript',5,499,56);
const Course2 = new TheoriticalCourse('MongoDB',3,999);

console.log(Course1);
console.log(Course2);

Course1.renderNumExercises();
Course2.renderPublish();

Course1.getCourseAmount;